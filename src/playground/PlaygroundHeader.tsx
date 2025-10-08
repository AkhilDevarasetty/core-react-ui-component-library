import { BiGrid } from 'react-icons/bi';

interface PlaygroundHeaderProps {
  version?: string;
}

const PlaygroundHeader = ({ version = "v0.0.1" }: PlaygroundHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BiGrid className="text-2xl text-blue-600 mr-2" />
            <h1 className="text-xl font-semibold text-gray-900">Core React UI Library</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{version}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PlaygroundHeader;
