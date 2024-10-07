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
import { optimismSepolia, sepolia } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

export const wagmiConfig = getDefaultConfig({
  appName: "Elipsys App",
  projectId: projectId,
  chains: [sepolia, optimismSepolia],
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
    transports: {
      [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
      [optimismSepolia.id]: http("https://sepolia.optimism.io"),
    },
  },
  ssr: true,
});
