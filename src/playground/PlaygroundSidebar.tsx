import { BiChevronDown, BiChevronRight, BiHome } from 'react-icons/bi';
import { ComponentDemo } from './types';

interface PlaygroundSidebarProps {
  componentDemos: ComponentDemo[];
  selectedComponent: string | null;
  expandedSections: { [key: string]: boolean };
  onSelectComponent: (componentName: string | null) => void;
  onToggleSection: (section: string) => void;
}

const PlaygroundSidebar = ({
  componentDemos,
  selectedComponent,
  expandedSections,
  onSelectComponent,
  onToggleSection
}: PlaygroundSidebarProps) => {
  const categories = Array.from(new Set(componentDemos.map(demo => demo.category)));
  const groupedComponents = categories.reduce((acc, category) => {
    acc[category] = componentDemos.filter(demo => demo.category === category);
    return acc;
  }, {} as { [key: string]: ComponentDemo[] });

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
      <nav className="p-4 space-y-2">
        <div className="mb-4">
          <button
            onClick={() => onSelectComponent(null)}
            className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedComponent === null 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BiHome className="mr-2" />
            Overview
          </button>
        </div>
        
        {Object.entries(groupedComponents).map(([category, components]) => (
          <div key={category} className="mb-4">
            <button
              onClick={() => onToggleSection(category)}
              className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {expandedSections[category] ? (
                <BiChevronDown className="mr-2" />
              ) : (
                <BiChevronRight className="mr-2" />
              )}
              {category}
            </button>
            
            {expandedSections[category] && (
              <div className="ml-4 space-y-1">
                {components.map((component) => (
                  <button
                    key={component.name}
                    onClick={() => onSelectComponent(component.name)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedComponent === component.name
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {component.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default PlaygroundSidebar;
