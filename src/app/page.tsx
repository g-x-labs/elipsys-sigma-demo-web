import SwapCard from "@/components/home/swap/SwapCard";
import SwapHeader from "@/components/home/swap/SwapHeader";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full justify-center overflow-x-hidden">
      <div className="mx-auto flex w-[456px] flex-col gap-y-6 p-4 pt-[134px]">
        <SwapHeader />
        <SwapCard />
      </div>
    </div>
  );
}
