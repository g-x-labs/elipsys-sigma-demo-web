import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

interface TokenNetworkSelectorProps {
  variant?: "token" | "network";
}

export default function TokenNetworkSelector(props: TokenNetworkSelectorProps) {
  const { variant = "token" } = props;

  return (
    <Button
      size={"large"}
      className={cn(
        "w-full min-w-[120px] justify-between rounded-none bg-black-700 hover:bg-gray-800",
        variant === "token"
          ? "flex rounded-tl-[4px] border-r border-gray-800"
          : "flex-1 rounded-tr-[4px]",
      )}
    >
      <div className="flex w-full items-center gap-x-2">
        {/* Conditionally render the circle for the token variant */}
        {variant === "token" && (
          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-600" />
        )}

        <div className="flex w-full flex-col items-start justify-between gap-y-[6px]">
          <span className="text-gray-400 text-sb3">
            {variant === "token" ? "Token" : "Network"}
          </span>
          <div className="flex flex-row items-center gap-x-1">
            <span className="text-gray-400 text-b2">Select</span>
            {/* TODO: Replace this with proper SVG */}
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="inherit"
              stroke="#A0A0A2"
            >
              <path d="M6 9l6 6 6-6" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </Button>
  );
}