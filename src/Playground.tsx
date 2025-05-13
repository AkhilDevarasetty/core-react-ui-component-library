import { Button } from '@lib/components';

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Playground: Button Component</h2>
        <Button label="Click Me!" onClick={() => alert('Button clicked!')} />
      </div>
    </div>
  );
};

export default Playground;
