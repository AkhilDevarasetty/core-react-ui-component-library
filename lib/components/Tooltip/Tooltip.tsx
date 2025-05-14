import useToggle from '@lib/hooks/useToggle';
import { TooltipProps } from '@lib/types/TooltipProps';
import { IoClose } from 'react-icons/io5';

const Tooltip = ({ children, toolTipTitle, toolTipDescription }: TooltipProps) => {
  const { isShow, handleToggle } = useToggle(true);
  return (
    isShow && (
      <div className="flex flex-row gap-4 bg-[#262626] h-[98px] w-[348px] relative rounded-lg p-4 items-start">
        <div>{children}</div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#FFFFFF] text-sm font-normal">{toolTipTitle}</h2>
          <p className="text-[#C7C7C7] text-sm font-normal">{toolTipDescription}</p>
        </div>
        <div onClick={handleToggle} className="cursor-pointer">
          <IoClose className="h-6 w-6 text-white" />
        </div>
        <div
          className="w-4 h-4 bg-[#262626] rotate-45 absolute -bottom-2 left-1/6"
          aria-hidden="true"
        />
      </div>
    )
  );
};

export default Tooltip;
