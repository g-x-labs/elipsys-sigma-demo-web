// atoms/bridgeSelectAtom.ts
import { atom } from "jotai";

export const bridgeSelectAtom = atom("wormhole-lite"); // Preselect "wormhole-lite"

export const bridgeAddressAtom = atom((get) => {
  const bridge = get(bridgeSelectAtom);
  switch (bridge) {
    case "wormhole-lite":
      return 1;
    case "wormhole":
    default:
      return 0;
  }
});
