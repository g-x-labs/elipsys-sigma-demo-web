interface TransactionDividerProps {
  label?: string;
  height?: string;
}

const TransactionDivider: React.FC<TransactionDividerProps> = (props) => {
  const { label, height = "40px" } = props;

  return (
    <div className={`flex h-[${height}] flex-row items-center gap-x-1`}>
      <div className="mx-4 h-full w-[1px] bg-gray-600" />
      {label && <span className="text-gray-400 text-sb3">{label}</span>}
    </div>
  );
};

export { TransactionDivider };
