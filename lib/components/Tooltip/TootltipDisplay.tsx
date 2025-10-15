import { TooltipDisplayProps } from "@lib/types/TooltipDisplayProps";
import { IoArchiveOutline, IoClose } from "react-icons/io5";

const TooltipDisplay = ({toolTipTitle, toolTipDescription,handleToggle }:TooltipDisplayProps) => {
  return (
    <div className="flex flex-row gap-4 bg-gray-800 min-h-24 max-w-sm relative rounded-lg p-4 items-start">
      <IoArchiveOutline className="h-6 w-6 text-white flex-shrink-0"/>
      <div className="flex flex-col gap-1 flex-1">
        <h2 className="text-white text-sm font-normal">{toolTipTitle}</h2>
        <p className="text-gray-300 text-sm font-normal">{toolTipDescription}</p>
      </div>
      <div onClick={handleToggle} className="cursor-pointer flex-shrink-0">
        <IoClose className="h-6 w-6 text-white" />
      </div>
      <div
        className="w-4 h-4 bg-gray-800 rotate-45 absolute -bottom-2 left-8"
        aria-hidden="true"
      />
    </div>
  );
};

export default TooltipDisplay;
