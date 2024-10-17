import { cn } from "@/lib/utils/common/cn";

interface TransactionDividerProps {
  label?: string;
  height?: number; // Expecting a number for height in pixels
}

const heightClass = (height: number) => `h-[${height}px]`; // Generate Tailwind class

const TransactionDivider: React.FC<TransactionDividerProps> = (props) => {
  const { label, height = 40 } = props;

  return (
    <div
      className={cn("flex w-full flex-row items-center", heightClass(height))}
    >
      <div className="mx-4 h-full w-[1px] bg-gray-600" />
      {label && <span className="text-gray-400 text-sb3">{label}</span>}
    </div>
  );
};

export { TransactionDivider };
