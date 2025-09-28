import { ComponentExample } from './types';
import CodeBlock from './CodeBlock';

interface ComponentExampleCardProps {
  example: ComponentExample;
  exampleIndex: number;
  componentName: string;
  copiedCode: string | null;
  onCopyCode: (code: string, id: string) => void;
}

const ComponentExampleCard = ({
  example,
  exampleIndex,
  componentName,
  copiedCode,
  onCopyCode
}: ComponentExampleCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {example.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {example.description}
        </p>
        
        {/* Component Preview */}
        <div className="bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center justify-center min-h-[120px]">
          <div className="w-full max-w-md">
            {example.component}
          </div>
        </div>
      </div>
      
      {/* Code Block */}
      <CodeBlock 
        example={example}
        componentName={componentName}
        exampleIndex={exampleIndex}
        copiedCode={copiedCode}
        onCopyCode={onCopyCode}
      />
    </div>
  );
};

export default ComponentExampleCard;
