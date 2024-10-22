//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ierc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ierc20Abi = [
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ierc20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ierc20MetadataAbit = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Approval",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Transfer",
    anonymous: false,
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CrossChainToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const crossChainTokenAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "name_", type: "string", internalType: "string" },
      { name: "symbol_", type: "string", internalType: "string" },
      {
        name: "bridgeAddrs",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "bridges",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "recipient", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "receiveWormholeMessages",
    inputs: [
      { name: "payload", type: "bytes", internalType: "bytes" },
      { name: "", type: "bytes[]", internalType: "bytes[]" },
      { name: "", type: "bytes32", internalType: "bytes32" },
      { name: "sourceChain", type: "uint16", internalType: "uint16" },
      { name: "", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "registerContract",
    inputs: [
      { name: "chainId", type: "uint16", internalType: "uint16" },
      {
        name: "contractAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registeredCounterparts",
    inputs: [{ name: "", type: "uint16", internalType: "uint16" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "sendTokens",
    inputs: [
      { name: "targetChain", type: "uint16", internalType: "uint16" },
      { name: "bridgeIndex", type: "uint256", internalType: "uint256" },
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "gasLimit", type: "uint256", internalType: "Gas" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setBridge",
    inputs: [
      { name: "index", type: "uint256", internalType: "uint256" },
      { name: "bridgeAddr", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenReceived",
    inputs: [
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sourceChain",
        type: "uint16",
        indexed: true,
        internalType: "uint16",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenSent",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "targetChain",
        type: "uint16",
        indexed: true,
        internalType: "uint16",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "sequence",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CrossChainTokenMetadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const crossChainTokenMetadataAbi = [
  {
    inputs: [
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "string", name: "symbol_", type: "string" },
      {
        internalType: "address[]",
        name: "bridgeAddrs",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    type: "error",
    name: "ERC20InsufficientAllowance",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    type: "error",
    name: "ERC20InsufficientBalance",
  },
  {
    inputs: [{ internalType: "address", name: "approver", type: "address" }],
    type: "error",
    name: "ERC20InvalidApprover",
  },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    type: "error",
    name: "ERC20InvalidReceiver",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    type: "error",
    name: "ERC20InvalidSender",
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    type: "error",
    name: "ERC20InvalidSpender",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Approval",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "TokenReceived",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        indexed: false,
      },
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
        indexed: false,
      },
    ],
    type: "event",
    name: "TokenSent",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Transfer",
    anonymous: false,
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
    name: "bridges",
    outputs: [{ internalType: "address", name: "", type: "address" }],
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "burn",
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "mint",
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
  },
  {
    inputs: [
      { internalType: "bytes", name: "payload", type: "bytes" },
      { internalType: "bytes[]", name: "", type: "bytes[]" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      { internalType: "bytes32", name: "", type: "bytes32" },
    ],
    stateMutability: "payable",
    type: "function",
    name: "receiveWormholeMessages",
  },
  {
    inputs: [
      { internalType: "uint16", name: "chainId", type: "uint16" },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "registerContract",
  },
  {
    inputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function",
    name: "registeredCounterparts",
    outputs: [{ internalType: "address", name: "", type: "address" }],
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "bridgeIndex",
        type: "uint256",
      },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "Gas", name: "gasLimit", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
    name: "sendTokens",
  },
  {
    inputs: [
      { internalType: "uint256", name: "index", type: "uint256" },
      {
        internalType: "address",
        name: "bridgeAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setBridge",
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
  },
];
