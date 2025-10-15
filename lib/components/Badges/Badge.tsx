import { BadgeProps } from '@lib/types/BadgeProps';

export const Badge = ({ badgeTitle, badgeType, badgeColor }: BadgeProps) => {
  const badgeVariants = {
    gray: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-800',
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-800',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-800',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
    },
    pink: {
      bg: 'bg-pink-100',
      text: 'text-pink-800',
    },
  };

  const variant = badgeVariants[badgeColor];

const renderBadge = () => {
    switch (badgeType) {
        case 'square':
            return (
                <div
                    className={`flex items-center justify-center rounded-sm py-1 px-4 h-8 w-auto ${variant.bg}`}
                >
                    <p className={`${variant.text} text-sm leading-5 font-medium`}>
                        {badgeTitle}
                    </p>
                </div>
            );
        case 'pill':
            return (
                <div
                    className={`flex items-center justify-center rounded-full py-1 px-4 h-8 w-auto ${variant.bg}`}
                >
                    <p className={`${variant.text} text-sm leading-5 font-medium`}>
                        {badgeTitle}
                    </p>
                </div>
            );
        default:
            return;
    }
};

  return <>{renderBadge()}</>;
};

export default Badge;
