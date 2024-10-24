import { Address } from "viem";

export type DecodedLogData = {
  emitterAddress: Address;
  sequence: bigint;
  nonce: number;
  instruction: string;
  consistencyLevel: number;
};
