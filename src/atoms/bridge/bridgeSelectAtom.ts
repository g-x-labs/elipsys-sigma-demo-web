// atoms/bridgeSelectAtom.ts
import { atom } from "jotai";
import { Address } from "viem";

export const bridgeSelectAtom = atom("wormhole-lite"); // Preselect "wormhole-lite"

export const bridgeAddressAtom = atom((get) => {
  const bridge = get(bridgeSelectAtom);
  switch (bridge) {
    case "wormhole-lite":
      return "0x" as Address;
    case "wormhole":
    default:
      return "0x" as Address;
  }
});
