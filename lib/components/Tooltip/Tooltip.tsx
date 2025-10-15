import useToggle from '@lib/hooks/useToggle';
import { TooltipProps } from '@lib/types/TooltipProps';
import TooltipDisplay from './TootltipDisplay';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const Tooltip = ({ children, toolTipTitle, toolTipDescription }: TooltipProps) => {
  const { isShow, handleToggle } = useToggle();
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [isPositioned, setIsPositioned] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({
    position: 'fixed',
    visibility: 'hidden', // Start hidden until positioned
    zIndex: 100,
  });
  const handleShowToolTipDisplay = () => {
    handleToggle(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isShow) {
        setIsPositioned(false); // Reset positioning on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isShow]);

  // First render the tooltip off-screen to get its dimensions
  useLayoutEffect(() => {
    if (isShow && !isPositioned && tooltipRef.current) {
      // Set a timeout to ensure the tooltip is rendered before measuring
      const timeoutId = setTimeout(() => {
        if (triggerRef.current && tooltipRef.current) {
          const triggerRect = triggerRef.current.getBoundingClientRect();
          const tooltipRect = tooltipRef.current.getBoundingClientRect();

          // Calculate left so tooltip is centered, with bounds check to avoid overflow
          let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 6;
          // Prevent tooltip from going offscreen on the left side
          left = Math.max(8, left);
          // Prevent tooltip from going offscreen on the right side
          if (left + tooltipRect.width > window.innerWidth - 8) {
            left = window.innerWidth - tooltipRect.width - 8;
          }

          // Place tooltip above the trigger with an 8px gap
          let top = triggerRect.top - tooltipRect.height - 8;
          // Check if tooltip overflows on the top and adjust if needed
          if (top < 8) {
            top = triggerRect.bottom + 8;
          }

          setTooltipStyle({
            position: 'fixed',
            left: `${left}px`,
            top: `${top}px`,
            zIndex: 100,
            visibility: 'visible', // Now make it visible
          });

          setIsPositioned(true);
        }
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [isShow, isPositioned]);

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      onMouseEnter={handleShowToolTipDisplay}
      ref={triggerRef}
    >
      {children}
      {isShow &&
        typeof document !== 'undefined' &&
        createPortal(
          <div ref={tooltipRef} style={tooltipStyle}>
            <TooltipDisplay
              toolTipTitle={toolTipTitle}
              toolTipDescription={toolTipDescription}
              handleToggle={handleToggle}
            />
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Tooltip;
