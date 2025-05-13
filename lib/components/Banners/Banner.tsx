import { BannerProps } from '@lib/types/BannerProps';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GoXCircleFill } from 'react-icons/go';
import { HiExclamationTriangle } from 'react-icons/hi2';
import { PiInfoFill } from 'react-icons/pi';

const Banner = ({ variant, isSingleLine = true, title, subTitle, className }: BannerProps) => {
  const variantClasses = {
    success: 'bg-[#ECFDF5] text-green-800 border-green-400',
    error: 'bg-[#FEF2F2] text-red-800 border-red-400',
    info: 'bg-[#EFF6FF] text-blue-800 border-blue-400',
    warn: 'bg-[#FFFBEB] text-yellow-800 border-yellow-400',
  };

  const titleClass = {
    success: '#065F46',
    error: '#92400E',
    info: '#1E40AF',
    warn: '#92400E',
  };

  const subTitleClass = {
    success: '#047857',
    error: '#B45309',
    info: '#1C51B9',
    warn: '#B45309',
  };

  const appliedClasses = variant ? variantClasses[variant] : '';
  let renderedIcon;
  switch (variant) {
    case 'success':
      renderedIcon = <BsCheckCircleFill className="h-4 w-4 text-white" fill="#34D399" />;
      break;
    case 'error':
      renderedIcon = <GoXCircleFill className="h-4 w-4 text-white" fill="#F87171" />;
      break;
    case 'info':
      renderedIcon = <PiInfoFill className="h-4 w-4" fill="#60A5FA" />;
      break;
    case 'warn':
      renderedIcon = <HiExclamationTriangle className="h-4 w-4" fill="#FBBF24" />;
      break;
    default:
      break;
  }

  if (isSingleLine) {
    return (
      <div className={`flex flex-row gap-2 p-4 rounded-md w-full items-center ${appliedClasses} ${className || ''}`} role='alert' aria-live="assertive">
        {renderedIcon}
        <p className={`text-sm leading-5 font-medium text-${variant ? titleClass[variant] : ''}`}>
          {title}
        </p>
      </div>
    );
  } else {
    return (
      <div className={`flex flex-row gap-4 p-4 rounded-md items-start ${appliedClasses} ${className || ''}`} role='alert' aria-live="assertive">
        <div>{renderedIcon}</div>
        <div className="flex flex-col gap-2">
          <h2
            className={`text-sm leading-5 font-medium text-${variant ? titleClass[variant] : ''}`}
          >
            {title}
          </h2>
          <p
            className={`text-sm leading-5 font-normal text-${variant ? subTitleClass[variant] : ''}`}
          >
            {subTitle}
          </p>
        </div>
      </div>
    );
  }
};

export default Banner;
