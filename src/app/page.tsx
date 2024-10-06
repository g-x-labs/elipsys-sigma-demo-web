import SwapBody from "@/components/home/swap/SwapBody";
import SwapHeader from "@/components/home/swap/SwapHeader";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-[456px] flex-col gap-y-6 p-4">
        <SwapHeader />
        <SwapBody />
      </div>
    </div>
  );
}
