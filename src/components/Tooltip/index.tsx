"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";

function Tooltip({
  children,
  label,
  align = "center",
}: {
  children: JSX.Element | JSX.Element[];
  label: string;
  align?: "center" | "end" | "start";
}) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content align={align}>
            <div className="text-sm font-semibold text-zinc-500 mb-1.5 hover:cursor-default">
              {label}
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default Tooltip;
