import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import TokenNetworkSelector from "@/components/home/swap/TokenNetworkSelector";
interface TokenInputProps {
  isReadOnly?: boolean;
  value?: string;
  onMaxClick?: () => void;
}

export default function TokenInput(props: TokenInputProps) {
  const { isReadOnly, value, onMaxClick } = props;

  return (
    <div className="flex w-full flex-col rounded-md border border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-700">
        <TokenNetworkSelector variant="token" />
        <TokenNetworkSelector variant="network" />
      </div>
      <div className="flex items-center justify-between p-4">
        {!isReadOnly && (
          <Button size={"small"} onClick={onMaxClick}>
            Max
          </Button>
        )}
        <Input value={value} disabled={isReadOnly} placeholder="0" />
        <div className="flex flex-col items-end justify-between">
          <span className="text-gray-400 text-sb3">
            {isReadOnly ? "USD" : "Balance"}
          </span>
          <span className="text-gray-400 text-sb3">--</span>
        </div>
      </div>
    </div>
  );
}
