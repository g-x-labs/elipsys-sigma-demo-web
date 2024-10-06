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
import { sepolia, arbitrumSepolia } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

export const wagmiConfig = getDefaultConfig({
  appName: "Elipsys App",
  projectId: projectId,
  chains: [sepolia, arbitrumSepolia],
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
      [sepolia.id]: http("https://1rpc.io/sepolia"),
      // [arbitrumSepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'),
    },
  },
  ssr: true,
});
