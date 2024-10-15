import { NetworkId } from "@/enums";
import { TokenInfo } from "@/types";
import { Address } from "viem";

export type NetworkInfo = {
  id: NetworkId;
  name: string;
  iconUrl?: string;
  tokens: Record<Address, TokenInfo>;
};
