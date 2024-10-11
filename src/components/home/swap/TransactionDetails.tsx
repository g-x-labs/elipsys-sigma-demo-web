import Tooltip from "@/components/ui/Tooltip";
import InfoIcon from "@/assets/icons/info.svg";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";
import { TransactionDetailProps } from "@/types/home/TransactionDetailsProps";

export default function TransactionDetail(props: TransactionDetailProps) {
  const { label, value, secondaryValue, tooltip } = props;

  // Check if value is a number or not
  const isNumber = !isNaN(Number(value)) && value !== "--";

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <p className="text-gray-600 text-sb3">{label}</p>
        {tooltip && (
          <Tooltip
            content={tooltip}
            contentProps={{ className: "max-w-[200px]" }}
            trigger={<InfoIcon className="w-3 fill-gray-200" />}
          />
        )}
      </div>
      <p className="flex items-center gap-1 text-gray-600 text-sb3">
        <span className={isNumber ? "line-through" : ""}>{value}</span>
        {secondaryValue && (
          <>
            <RightArrowIcon className="w-3 fill-gray-600" />
            <span>{secondaryValue}</span>
          </>
        )}
      </p>
    </div>
  );
}
