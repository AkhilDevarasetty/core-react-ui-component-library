import { BiBook } from 'react-icons/bi';

interface InstallationGuideProps {
  componentName: string;
  packageName?: string;
}

const InstallationGuide = ({ 
  componentName, 
  packageName = 'core-react-ui-component-library' 
}: InstallationGuideProps) => {
  return (
    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <BiBook className="mr-2" />
        Installation & Usage
      </h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">Install the library:</p>
          <div className="bg-gray-900 text-gray-100 rounded-md p-3">
            <code className="text-sm">npm install {packageName}</code>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Import and use:</p>
          <div className="bg-gray-900 text-gray-100 rounded-md p-3">
            <code className="text-sm">
              {`import { ${componentName} } from '${packageName}';`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
