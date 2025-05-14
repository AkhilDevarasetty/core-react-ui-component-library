'use client';
import Tooltip from '@lib/components/Tooltip/Tooltip';
import { BiInfoCircle } from 'react-icons/bi';

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Playground: Banner Component</h2>
        <Tooltip
          toolTipTitle="Sample Title"
          toolTipDescription="This is a sample description for the tooltip."
          closeToolTip={() => console.log('Tooltip closed')}
        >
          <BiInfoCircle className="cursor-pointer" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Playground;
