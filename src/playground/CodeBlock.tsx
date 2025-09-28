import { BiCode, BiCopy, BiCheck } from 'react-icons/bi';
import { ComponentExample } from './types';

interface CodeBlockProps {
  example: ComponentExample;
  componentName: string;
  exampleIndex: number;
  copiedCode: string | null;
  onCopyCode: (code: string, id: string) => void;
}

const CodeBlock = ({ example, componentName, exampleIndex, copiedCode, onCopyCode }: CodeBlockProps) => {
  const codeId = `${componentName}-${exampleIndex}`;
  const isCopied = copiedCode === codeId;

  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <div className="flex items-center">
          <BiCode className="mr-2 text-gray-400" />
          <span className="text-sm text-gray-300">Code</span>
        </div>
        <button
          onClick={() => onCopyCode(example.code, codeId)}
          className="flex items-center px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors"
        >
          {isCopied ? (
            <>
              <BiCheck className="mr-1" />
              Copied
            </>
          ) : (
            <>
              <BiCopy className="mr-1" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code>{example.code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
