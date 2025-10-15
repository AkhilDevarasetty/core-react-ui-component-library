import { BannerProps } from '@lib/types/BannerProps';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GoXCircleFill } from 'react-icons/go';
import { HiExclamationTriangle } from 'react-icons/hi2';
import { PiInfoFill } from 'react-icons/pi';

const Banner = ({ variant, isSingleLine = true, title, subTitle, className }: BannerProps) => {
  const variantClasses = {
    success: 'bg-emerald-50 text-emerald-800 border-emerald-400',
    error: 'bg-red-50 text-red-800 border-red-400',
    info: 'bg-blue-50 text-blue-800 border-blue-400',
    warn: 'bg-yellow-50 text-yellow-800 border-yellow-400',
  };

  const titleClass = {
    success: 'text-emerald-900',
    error: 'text-red-900',
    info: 'text-blue-900',
    warn: 'text-yellow-900',
  };

  const subTitleClass = {
    success: 'text-emerald-700',
    error: 'text-red-700',
    info: 'text-blue-700',
    warn: 'text-yellow-700',
  };

  const appliedClasses = variant ? variantClasses[variant] : '';
  let renderedIcon;
  switch (variant) {
    case 'success':
      renderedIcon = <BsCheckCircleFill className="h-4 w-4 text-emerald-400" />;
      break;
    case 'error':
      renderedIcon = <GoXCircleFill className="h-4 w-4 text-red-400" />;
      break;
    case 'info':
      renderedIcon = <PiInfoFill className="h-4 w-4 text-blue-400" />;
      break;
    case 'warn':
      renderedIcon = <HiExclamationTriangle className="h-4 w-4 text-yellow-400" />;
      break;
    default:
      break;
  }

  if (isSingleLine) {
    return (
      <div className={`flex flex-row gap-2 p-4 rounded-md w-full items-center ${appliedClasses} ${className || ''}`} role='alert' aria-live="assertive">
        {renderedIcon}
        <p className={`text-sm leading-5 font-medium ${variant ? titleClass[variant] : ''}`}>
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
