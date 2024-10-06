import ElipsysIcon from "@/assets/icons/elipsys-large.svg";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[80px] w-full items-center justify-between px-[60px] py-7">
      {/* TODO: Consider linking back to home */}
      <ElipsysIcon className="w-[96px]" />

      {/* TODO: Link wallet connet */}
      <Button variant="text" size={"fit"}>
        Connect
      </Button>
    </nav>
  );
}
