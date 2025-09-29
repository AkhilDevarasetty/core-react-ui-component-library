import { BadgeProps } from '@lib/types/BadgeProps';

const Badge = ({ badgeTitle, badgeType, badgeColor }: BadgeProps) => {
  const badgeColorVariations = {
    gray: 'bg-[#F3F4F6]',
    red: 'bg-[#FEE2E2]',
    yellow: 'bg-[#FEF3C7]',
    green: 'bg-[#D1FAE5]',
    blue: 'bg-[#DBEAFE]',
    indigo: 'bg-[#E0E7FF]',
    purple: 'bg-[#EDE9FE]',
    pink: 'bg-[#FCE7F3]',
  };

  const badgeTitleClass = {
    gray: '#1F2937',
    red: '#991B1B',
    yellow: '#92400E',
    green: '#065F46',
    blue: '#1E40AF',
    indigo: '#3730A3',
    purple: '#5B21B6',
    pink: '#9D174D',
  };

const renderBadge = () => {
    switch (badgeType) {
        case 'square':
            return (
                <div
                    className={`flex items-center justify-center rounded-sm py-1 px-4 h-8 w-auto ${badgeColorVariations[badgeColor]}`}
                >
                    <p className={`text-${badgeTitleClass[badgeColor]} text-sm leading-5 font-medium`}>
                        {badgeTitle}
                    </p>
                </div>
            );
        case 'pill':
            return (
                <div
                    className={`flex items-center justify-center rounded-full py-1 px-4 h-8 w-auto ${badgeColorVariations[badgeColor]}`}
                >
                    <p className={`text-${badgeTitleClass[badgeColor]} text-sm leading-5 font-medium`}>
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
