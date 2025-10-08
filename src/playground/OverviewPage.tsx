import { BiInfoCircle } from 'react-icons/bi';
import { ComponentDemo } from './types';

interface OverviewPageProps {
  componentDemos: ComponentDemo[];
  onSelectComponent: (componentName: string) => void;
}

const OverviewPage = ({ componentDemos, onSelectComponent }: OverviewPageProps) => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Core React UI Library
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A collection of reusable React components built with TypeScript and Tailwind CSS. 
          Explore our components and see them in action.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex">
            <BiInfoCircle className="text-blue-400 mr-2 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-blue-800">Getting Started</h3>
              <p className="mt-1 text-sm text-blue-700">
                Click on any component in the sidebar to see examples and code snippets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentDemos.map((component) => (
          <div
            key={component.name}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onSelectComponent(component.name)}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {component.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {component.description}
            </p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {component.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewPage;
