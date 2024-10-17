import { cn } from "@/lib/utils/common/cn";

interface TransactionDividerProps {
  label?: string;
  className?: string;
}

const TransactionDivider: React.FC<TransactionDividerProps> = (props) => {
  const { label, className } = props;

  return (
    <div className={cn(className, "flex w-full flex-row items-center")}>
      <div className="mx-4 h-full w-[1px] bg-gray-600" />
      {label && <span className="text-gray-400 text-sb3">{label}</span>}
    </div>
  );
};

export { TransactionDivider };
