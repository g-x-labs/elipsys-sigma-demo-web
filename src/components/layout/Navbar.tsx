import ElipsysIcon from "@/assets/icons/elipsys-large.svg";
import { Button } from "@/components/shared/Button";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-16 py-8">
      {/* Left side of the Navbar */}
      <ElipsysIcon className="w-[96px]" />

      {/* TODO: Link wallet connet */}
      <Button variant="text" size={"fit"}>
        Connect
      </Button>
    </nav>
  );
}
