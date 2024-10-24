import {
  Log,
  Hash,
  decodeAbiParameters,
  Address,
  keccak256,
  encodePacked,
} from "viem";
import { publicClient } from "@/lib/client/viem/client";
import { createEthersClient } from "@/lib/client/ethers/client";
// import { generateSignature } from "../utils/signature/aggregate";
import {
  WCOM_ADDRESS,
  WRCOM_ADDRESS,
  ZERO_ADDRESS,
} from "../constants/addresses";
import { DecodedLogData } from "@/types/relayer";
import { mockSignature } from "../constants/mock-signature";
import { bscTestnet } from "viem/chains";
import { ethers } from "ethers";
import { wrDeliverAbi } from "../../contract/abi";

// Constants variables
// const SIGNATURE_PARITY = 28;
// const SIGNATURE_PX =
//   "0x5fe055a80305da76a999c83a4bc19f26b498bb2424874138eccd8dee9a2b5c4e";
const GAS_LIMIT = ethers.parseEther("0.0000000000001"); // Fix gas limit
const W_BNB_CHAIN_ID = 4;

// Get transaction logs from txHash
async function getTransactionLogs(txHash: Hash): Promise<Log[]> {
  try {
    const transaction = await publicClient.getTransactionReceipt({
      hash: txHash,
    });
    return transaction.logs;
  } catch (error) {
    console.error(`Failed to get transaction logs for hash: ${txHash}`, error);
    throw new Error("Error fetching transaction logs");
  }
}

// Decode logs
async function decodeLogData(logs: Log[]): Promise<DecodedLogData | null> {
  try {
    for (const log of logs) {
      if (log.address.toLowerCase() === WCOM_ADDRESS.toLowerCase()) {
        const logData = log.data;

        const decodedArray = decodeAbiParameters(
          [
            { type: "uint64", name: "sequence" },
            { type: "uint32", name: "nonce" },
            { type: "bytes", name: "instruction" },
            { type: "uint8", name: "consistencyLevel" },
          ],
          logData,
        );

        const decoded: DecodedLogData = {
          emitterAddress: log.address,
          sequence: decodedArray[0],
          nonce: decodedArray[1],
          instruction: decodedArray[2],
          consistencyLevel: decodedArray[3],
        };

        return decoded;
      }
    }
    return null; // Add this line to handle the case where no logs match
  } catch (error) {
    console.error("Error decoding log data", error);
    return null;
  }
}

// Function to encode the last part with hash
function encodeLastPartWithHash(
  timestamp: number,
  nonce: number,
  emitterChainId: number,
  emitterAddress: string,
  sequence: bigint,
  consistencyLevel: number,
  payload: string,
): { hash: string; enc: string } {
  // Convert address (byte20) to the byte32 based on solidity struct
  const paddedEmitterAddress =
    `0x${emitterAddress.slice(2).padStart(64, "0")}` as `0x${string}`;

  const enc = encodePacked(
    ["uint32", "uint32", "uint16", "bytes32", "uint64", "uint8", "bytes"],
    [
      timestamp,
      nonce,
      emitterChainId,
      paddedEmitterAddress,
      sequence,
      consistencyLevel,
      `0x${Buffer.from(payload).toString("hex")}`,
    ],
  );

  // Hash the encoded data
  const hash = keccak256(keccak256(enc));

  return { hash, enc };
}

// Encoded VM
async function encodedVMCom(
  nonce: number,
  wcomEthChainId: number,
  wcomEthAddress: Address,
  sequence: bigint,
  consistencyLevel: number,
  instruction: string,
): Promise<string> {
  const version = 1;
  const timestamp = 1720525446;
  const guardianSetIndex = 0;

  const encFirstPart = encodePacked(
    ["uint8", "uint32"],
    [version, guardianSetIndex],
  );

  const { hash: h, enc: lastPart } = encodeLastPartWithHash(
    timestamp,
    nonce,
    wcomEthChainId,
    wcomEthAddress,
    sequence,
    consistencyLevel,
    instruction,
  );

  console.log("encFirstPart", encFirstPart);
  console.log("h", h);
  console.log("lastPart", lastPart);

  try {
    // const { rAddress, s } = await generateSignature(h);

    // let enc = encodePacked(
    //   ["bytes", "bytes12", "address", "uint8", "bytes32", "uint256"],
    //   [
    //     encFirstPart,
    //     "0x000000000000000000000000",
    //     rAddress,
    //     SIGNATURE_PARITY,
    //     SIGNATURE_PX,
    //     s,
    //   ],
    // );

    // const lastPartBytes = Buffer.from(lastPart, "utf8").toString(
    //   "hex",
    // ) as `0x${string}`;

    // enc = encodePacked(["bytes", "bytes"], [enc, lastPartBytes]);
    // console.log("Encoded VM: ", enc);

    // TODO: remove mock encodeVM
    const mockEnc = mockSignature.mockEncodedVM;

    return mockEnc;
  } catch (error) {
    console.error("Error generating signature", error);
    throw new Error("Failed to encode VM");
  }
}

// Get encoded VM
async function getEncodedVMCom(txHash: Hash): Promise<string> {
  try {
    const logs = await getTransactionLogs(txHash);
    const decodedLog = await decodeLogData(logs);
    if (decodedLog) {
      const encodedVM = await encodedVMCom(
        decodedLog.nonce,
        W_BNB_CHAIN_ID,
        ZERO_ADDRESS,
        decodedLog.sequence,
        decodedLog.consistencyLevel,
        decodedLog.instruction,
      );
      return encodedVM;
    }
    console.warn("No valid logs found for transaction:", txHash);
    throw new Error("No valid logs found for transaction");
  } catch (error) {
    console.error("Error getting encoded VM for transaction:", txHash, error);
    throw new Error(`Failed to get encoded VM: ${error}`);
  }
}

async function deliver(
  encodedVMs: string[],
  encodedDeliveryVAA: string,
  relayerRefundAddress: string,
  deliveryOverrides: string,
): Promise<Hash> {
  try {
    const client = createEthersClient(bscTestnet.id);
    const wrComcontract = new ethers.Contract(
      WRCOM_ADDRESS,
      wrDeliverAbi,
      client,
    );

    const tx = await wrComcontract.deliver(
      encodedVMs,
      encodedDeliveryVAA,
      relayerRefundAddress,
      deliveryOverrides,
      {
        value: GAS_LIMIT,
      },
    );
    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    return receipt.hash;
  } catch (error) {
    console.error("Error delivering transaction:", error);
    throw new Error("Failed to deliver transaction");
  }
}

// Relay the transaction
export async function relayTransaction(txHash: Hash): Promise<Hash> {
  try {
    const encodedVM = await getEncodedVMCom(txHash);
    return await deliver([], encodedVM, ZERO_ADDRESS, "0x");
  } catch (error) {
    console.error("Error relaying transaction", error);
    throw new Error("Failed to relay transaction");
  }
}
