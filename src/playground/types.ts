// Types for the playground components
export interface ComponentExample {
  title: string;
  description: string;
  component: JSX.Element;
  code: string;
}

export interface ComponentDemo {
  name: string;
  description: string;
  category: string;
  examples: ComponentExample[];
}

export interface PlaygroundState {
  selectedComponent: string | null;
  copiedCode: string | null;
  expandedSections: { [key: string]: boolean };
}
