import { BridgeSelect } from "@/components/bridge";

const BridgeHeader: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-y-5">
      <h2 className="text-gray-200 text-h3">Transfer</h2>
      <hr className="h-0.5 w-full border-black-700" />
      <div className="flex flex-col gap-y-3">
        <h3 className="text-gray-400 text-sb3">Bridge</h3>
        <BridgeSelect />
      </div>
    </div>
  );
};

export { BridgeHeader };
