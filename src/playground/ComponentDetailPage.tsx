import { ComponentDemo } from './types';
import ComponentExampleCard from './ComponentExampleCard';
import InstallationGuide from './InstallationGuide';

interface ComponentDetailPageProps {
  component: ComponentDemo;
  copiedCode: string | null;
  onCopyCode: (code: string, id: string) => void;
}

const ComponentDetailPage = ({ component, copiedCode, onCopyCode }: ComponentDetailPageProps) => {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {component.name}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {component.description}
        </p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {component.category}
        </span>
      </div>

      <div className="space-y-8">
        {component.examples.map((example, index) => (
          <ComponentExampleCard
            key={index}
            example={example}
            exampleIndex={index}
            componentName={component.name}
            copiedCode={copiedCode}
            onCopyCode={onCopyCode}
          />
        ))}
      </div>

      <InstallationGuide componentName={component.name} />
    </div>
  );
};

export default ComponentDetailPage;
