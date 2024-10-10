import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { Input } from "./Input";
import { cn } from "@/lib/utils/cn";
import React from "react";
import SearchIcon from "@/assets/icons/ui/search.svg";

const searchBarVariants = cva(
  [
    "w-full flex flex-row items-center justify-start border border-gray-800 rounded-lg bg-black-800",
  ],
  {
    variants: {
      variant: {
        default: "h-8",
      },
      size: {
        default: "p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type SearchBarVariantProps = VariantProps<typeof searchBarVariants>;

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchBar = React.forwardRef<
  HTMLInputElement,
  SearchBarProps & SearchBarVariantProps
>(({ variant, size, className, ...props }, ref) => {
  return (
    <div className={cn(searchBarVariants({ variant, size, className }))}>
      <SearchIcon className="h-4 w-4 fill-gray-200" />
      <Input className={"text-sb2"} ref={ref} {...props} />
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
