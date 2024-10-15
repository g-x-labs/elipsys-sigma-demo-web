"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils/common/cn";

export type TooltipProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  rootProps?: Omit<TooltipPrimitive.TooltipProps, "children">;
  contentProps?: TooltipPrimitive.TooltipContentProps;
  arrowProps?: TooltipPrimitive.TooltipArrowProps;
};

const Tooltip: React.FC<TooltipProps> = ({
  trigger,
  content,
  rootProps,
  contentProps,
  arrowProps,
}) => {
  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>
          <div className="cursor-pointer">{trigger}</div>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            {...contentProps}
            align={contentProps?.align ?? "center"}
            alignOffset={contentProps?.alignOffset ?? -32}
            side={contentProps?.side ?? "top"}
            sideOffset={contentProps?.sideOffset ?? 5}
            className={cn(
              "data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-[1000] select-none rounded-sm bg-gray-800 p-3 text-sm text-gray-200 will-change-[transform,opacity]",
              contentProps?.className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow
              {...arrowProps}
              className={cn("fill-gray-800", arrowProps?.className)}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export { Tooltip };
