import React from "react";

type Placement = "top" | "left" | "bottom" | "right";

type TooltipType = {
  children: React.ReactNode;
  title: string;
  placement?: Placement;
};

const calculatePosition = (placement: Placement) => {
  switch (placement) {
    case "top":
      return {
        position:
          "-translate-x-1/2 top-auto left-1/2 right-auto bottom-[calc(100%+3px+.1875rem)]",
        tailPosition:
          "-translate-x-1/2 top-auto left-1/2 right-auto bottom-[calc(100%+3px)]",
      };
    case "left":
      return {
        position:
          "-translate-y-1/2 top-1/2 left-auto bottom-auto right-[calc(100%+3px+.1875rem)]",
        tailPosition:
          "-translate-y-1/2 top-1/2 left-auto bottom-auto right-[calc(100%+3px)]",
      };
    case "right":
      return {
        position:
          "-translate-y-1/2 top-1/2 right-auto bottom-auto left-[calc(100%+3px+.1875rem)]",
        tailPosition:
          "-translate-y-1/2 top-1/2 right-auto bottom-auto left-[calc(100%+3px)]",
      };
    case "bottom":
      return {
        position:
          "-translate-x-1/2 bottom-auto left-1/2 right-auto top-[calc(100%+3px+.1875rem)]",
        tailPosition:
          "-translate-x-1/2 bottom-auto left-1/2 right-auto top-[calc(100%+3px)]",
      };
    default:
      return {
        position: "",
        tailPosition: "",
      };
  }
};

const Tooltip = ({ children, title, placement = "top" }: TooltipType) => {
  const { position, tailPosition } = calculatePosition(placement);

  return (
    <div className="group relative cursor-pointer">
      {children}
      <div
        className={`absolute  invisible inset-y-0  items-center group-hover:visible max-w-80 inset-0 rounded-md py-1 px-2 bg-primary shadow-inner text-sm text-white w-max z-20 ${position}`}
      >
        {title}
      </div>
      <div
        className={`absolute invisible w-2 h-2 bg-primary  rotate-45 ${tailPosition} z-10 group-hover:visible`}
      ></div>
    </div>
  );
};

export default Tooltip;
