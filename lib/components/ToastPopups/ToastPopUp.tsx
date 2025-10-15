import { ToastPopUpProps } from '@lib/types/ToastPopUpProps';
import { BsCheckCircle, BsXCircle, BsInfoCircle, BsExclamationTriangle } from 'react-icons/bs';

export const ToastPopUp = ({ title, message, position, type }: ToastPopUpProps) => {
  const positionClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };
  const appliedClasses = position ? `absolute ${positionClass[position]}` : '';
  const renderToast = () => {
    switch (type) {
      case 'success':
        return (
          <div
            className={`flex items-center max-w-xs bg-green-50 p-4 rounded-lg shadow-md gap-4 bottom ${appliedClasses}`}
          >
            <BsCheckCircle fill="#22C55E" className="h-6 w-6 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-green-700">{title}</div>
              <div className="text-sm text-green-600">{message}</div>
            </div>
          </div>
        );
      case 'error':
        return (
          <div
            className={`flex items-center max-w-xs bg-red-50 p-4 rounded-lg shadow-md gap-4 ${appliedClasses}`}
          >
            <BsXCircle fill="#F87171" className="h-6 w-6 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-red-700">{title}</div>
              <div className="text-sm text-red-600">{message}</div>
            </div>
          </div>
        );
      case 'warning':
        return (
          <div
            className={`flex items-center max-w-xs bg-yellow-50 p-4 rounded-lg shadow-md gap-4 ${appliedClasses}`}
          >
            <BsExclamationTriangle fill="#F59E0B" className="h-6 w-6 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-yellow-700">{title}</div>
              <div className="text-sm text-yellow-600">{message}</div>
            </div>
          </div>
        );
      case 'info':
        return (
          <div
            className={`flex items-center max-w-xs bg-blue-50 p-4 rounded-lg shadow-md gap-4 ${appliedClasses}`}
          >
            <BsInfoCircle fill="#3B82F6" className="h-6 w-6 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-blue-700">{title}</div>
              <div className="text-sm text-blue-600">{message}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderToast()}</div>;
};

export default ToastPopUp;
