"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "@/contract/wagmi.config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Provider } from "jotai"; // Import Jotai Provider

const queryClient = new QueryClient();

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Provider>{children}</Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
