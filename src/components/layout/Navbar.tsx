import ElipsysIcon from "@/assets/icons/elipsys-large.svg";
import { ConnectWalletButton } from "@/components/wallet/ConnectWalletButton";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-16 py-8">
      {/* TODO: Consider linking back to home */}
      <ElipsysIcon className="w-[96px]" />
      <ConnectWalletButton />
    </nav>
  );
}
