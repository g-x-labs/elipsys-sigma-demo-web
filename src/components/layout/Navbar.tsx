import ElipsysIcon from "@/assets/icons/branding/elipsys-large.svg";
import WalletConnectSection from "@/components/wallet/WalletConnectSection";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[80px] w-full items-center justify-between px-[60px] py-7">
      {/* TODO: Consider linking back to home */}
      <ElipsysIcon className="w-[96px]" />
      <WalletConnectSection />
    </nav>
  );
}
