import Tooltip from "@/components/ui/Tooltip";
import InfoIcon from "@/assets/icons/info.svg";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";
import { formatAsUsd } from "@/lib/utils/format";

// TODO: Change values to type number
export interface TransactionDetailProps {
  label: string;
  value: number | null | undefined;
  secondaryValue?: number | null | undefined;
  tooltip?: string;
}

// TODO: Reconsider where to place this
// INFO: This is used in the main component and in the transaction modals
// TODO: Consider edge case where secondaryValue is <0.01 as well. Shouldn't display <0.01 -> <0.01
export default function TransactionDetail(props: TransactionDetailProps) {
  const { label, value, secondaryValue, tooltip } = props;

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
        <span className={secondaryValue ? "line-through" : ""}>
          {formatAsUsd(value)}
        </span>
        {secondaryValue && (
          <>
            <RightArrowIcon className="w-3 fill-gray-600" />
            <span>{formatAsUsd(secondaryValue)}</span>
          </>
        )}
      </p>
    </div>
  );
}
