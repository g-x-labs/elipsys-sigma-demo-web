import { NetworkId } from "@/enums/networks";
import { TokenInfo } from "@/types/token";
import { Address } from "viem";

export type NetworkInfo = {
  id: NetworkId;
  name: string;
  iconUrl?: string;
  tokens: Record<Address, TokenInfo>;
};
