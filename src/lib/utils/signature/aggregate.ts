import { mockSignature } from "@/lib/constants/mock-signature";
import axios, { AxiosResponse, Method } from "axios";
import {
  PublicKeyPackage,
  StartRoundPayload,
  AddSignatureSharePayload,
} from "@/types/signature";
import { Address } from "viem";
import config from "@/lib/config/config";

export async function aggregateSignature(msg: string): Promise<string> {
  try {
    const msgHex = Buffer.from(msg).toString("hex");

    const pkgUUID = await createPublicKeyGroup();

    const roundUUID = await createRound(msgHex, pkgUUID);

    await Promise.all(
      mockSignature.participants.map((share) =>
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
        mockSignature.participants.map((share) => [
          share.identifier,
          share.verifying_share,
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
    commitments: mockSignature.participants.map((share) => [
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
    round_id: roundUUID,
    signer_id: signerId,
    signature_share: signatureShare,
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

export async function generateSignature(
  hash: string,
): Promise<{ rAddress: Address; s: bigint }> {
  console.log("hash", hash);
  // const signature = await aggregateSignature(hash);

  // TODO: remove mock signature
  const mockSignature =
    "6896bd60eeae296db48a229ff71dfe071bde413e6d43f917dc8dcf8c78de33418906d11ac976abccb20b091292bff4ea897efcb639ea871cfa95f6de339e4b0a";

  return extractSignature(mockSignature);
}

async function extractSignature(
  signature: string,
): Promise<{ rAddress: Address; s: bigint }> {
  const rAddress = `0x${signature.slice(2, 42)}` as Address;
  const s = BigInt(signature.slice(42));

  return { rAddress, s };
}
