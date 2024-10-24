const config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  sepoliaProviderUrl:
    process.env.SEPOLIA_PROVIDER_URL ||
    "https://eth-sepolia.api.onfinality.io/public",
  bnbTestnetProviderUrl:
    process.env.BNB_TESTNET_PROVIDER_URL ||
    "https://bsc-testnet-rpc.publicnode.com",
  relayerPrivateKey: process.env.RELAYER_PRIVATE_KEY,
};

export default config;
