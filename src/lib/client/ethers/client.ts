import { JsonRpcProvider, Wallet } from "ethers";
import { sepolia, bscTestnet } from "viem/chains";
import config from "@/lib/config/config";

export function createEthersClient(chainId: number): Wallet | null {
  let providerUrl: string | undefined;
  switch (chainId) {
    case sepolia.id:
      providerUrl = config.sepoliaProviderUrl;
      break;
    case bscTestnet.id:
      providerUrl = config.bnbTestnetProviderUrl;
      break;
    default:
      console.error(`Unsupported chain: ${chainId}`);
      return null;
  }

  if (!providerUrl) {
    console.error(`Provider URL for ${chainId} is not defined`);
    return null;
  }

  const provider = new JsonRpcProvider(providerUrl);
  const privateKey = config.relayerPrivateKey;

  if (!privateKey) {
    console.error("Relayer private key is not defined");
    return null;
  }

  return new Wallet(privateKey, provider);
}
