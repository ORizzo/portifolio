"use client";

import * as RadixTooltip from "@radix-ui/react-Tooltip";

function Tooltip({
  children,
  label,
}: {
  children: JSX.Element | JSX.Element[];
  label: string;
}) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Content>
          <div className="text-sm font-semibold text-zinc-500 mb-1.5 hover:cursor-default">
            {label}
          </div>
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default Tooltip;
