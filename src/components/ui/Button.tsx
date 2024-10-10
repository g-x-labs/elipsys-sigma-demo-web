import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "group ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-white text-sb1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gray-800 hover:bg-gray-700 disabled:text-gray-600 rounded-lg active:bg-gray-700",
        link: "text-gray-600 underline-offset-4 hover:underline",
        text: "text-gray-600 hover:text-gray-200",
        dropdown: "bg-black-800 rounded-lg",
        transparent:
          "bg-transparent hover:bg-black-700 data-[active=true]:bg-black-700 rounded-lg",
        // INFO: One-offs goes here
        tokenSelector:
          "bg-black-700 hover:bg-gray-800 flex rounded-tl-[4px] border-r border-gray-800",
        networkSelector:
          "bg-black-700 hover:bg-gray-800 flex-1 rounded-tr-[4px]",
      },
      size: {
        default: "h-[56px] px-5 py-4",
        large: "h-[76px] p-4",
        dropdown: "h-[44px] px-4 py-3",
        small: "h-[26px] rounded-[4px] px-3 py-2 text-sb3",
        icon: "h-10 w-10",
        fit: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
