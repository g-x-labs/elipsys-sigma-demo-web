import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  bybitWallet,
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  rabbyWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { http } from "viem";
import { bscTestnet, sepolia } from "wagmi/chains";

const {
  NEXT_PUBLIC_SEPOLIA_PROVIDER_URL,
  NEXT_PUBLIC_BNB_TESTNET_PROVIDER_URL,
} = process.env;

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

export const wagmiConfig = getDefaultConfig({
  appName: "Elipsys App",
  projectId: projectId,
  chains: [sepolia, bscTestnet],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [
        injectedWallet,
        metaMaskWallet,
        rabbyWallet,
        bybitWallet,
        coinbaseWallet,
        walletConnectWallet,
        okxWallet,
      ],
    },
  ],

  transports: {
    [sepolia.id]: http(
      NEXT_PUBLIC_SEPOLIA_PROVIDER_URL ||
        "https://eth-sepolia.api.onfinality.io/public",
    ),
    [bscTestnet.id]: http(
      NEXT_PUBLIC_BNB_TESTNET_PROVIDER_URL ||
        "https://bsc-testnet-rpc.publicnode.com",
    ),
  },
  ssr: true,
});
