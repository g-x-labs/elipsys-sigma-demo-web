import { mockSignature } from "@/lib/constants/mock-signature";
import axios, { AxiosResponse, Method } from "axios";
import {
  PublicKeyPackage,
  StartRoundPayload,
  AddSignatureSharePayload,
} from "@/types/signature";
import config from "@/lib/config/config";

export async function aggregateSignature(msg: string): Promise<string> {
  try {
    const msgHex = Buffer.from(msg).toString("hex");

    const pkgUUID = await createPublicKeyGroup();

    const roundUUID = await createRound(msgHex, pkgUUID);

    await Promise.all(
      mockSignature.participant_shares.map((share) =>
        addSignatureShare(roundUUID, share.identifier, share.signature_share),
      ),
    );

    return await aggregateSignatureShare(roundUUID);
  } catch (error) {
    console.error("Error in aggregateSignature:", error);
    throw new Error("Failed to aggregate signature");
  }
}

async function createPublicKeyGroup(): Promise<string> {
  try {
    const payload: PublicKeyPackage = {
      verifying_shares: Object.fromEntries(
        mockSignature.participant_shares.map((share) => [
          share.identifier,
          share.participant_share,
        ]),
      ),
      verifying_key: mockSignature.verifying_key,
    };

    return await makeApiRequest("POST", "/public_keys_group", payload);
  } catch (error) {
    console.error("Error creating public key group:", error);
    throw new Error("Failed to create public key group");
  }
}

async function createRound(msg: string, uuid: string): Promise<string> {
  const payload: StartRoundPayload = {
    msg,
    public_key_set: uuid,
    commitments: mockSignature.participant_shares.map((share) => [
      share.identifier,
      share.commitment,
    ]),
  };
  return await makeApiRequest("POST", "/round", payload);
}

async function addSignatureShare(
  roundUUID: string,
  signerId: string,
  signatureShare: string,
): Promise<void> {
  const payload: AddSignatureSharePayload = {
    roundId: roundUUID,
    signerId: signerId,
    signatureShare: signatureShare,
  };
  await makeApiRequest("POST", `/round/${roundUUID}/signature`, payload);
}

async function aggregateSignatureShare(roundUUID: string): Promise<string> {
  return await makeApiRequest("GET", `/round/${roundUUID}/aggregate`);
}

async function makeApiRequest<T, D = unknown>(
  method: Method,
  endpoint: string,
  data?: D,
): Promise<T> {
  const url = `${config.apiBaseUrl}${endpoint}`;
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`API request failed for ${method} ${endpoint}:`, error);
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }
    throw new Error("API request failed: Unknown error");
  }
}
