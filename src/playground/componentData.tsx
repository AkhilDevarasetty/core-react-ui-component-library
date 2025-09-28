import { Button, Banner, Tooltip } from '@lib/components';
import { BiInfoCircle } from 'react-icons/bi';
import { ComponentDemo } from './types';

export type { ComponentDemo } from './types';

export const componentDemos: ComponentDemo[] = [
  {
    name: 'Button',
    description: 'A versatile button component with customizable styles and actions.',
    category: 'Form Elements',
    examples: [
      {
        title: 'Basic Button',
        description: 'Simple button with label and click handler',
        component: <Button label="Click Me" onClick={() => alert('Button clicked!')} />,
        code: `<Button label="Click Me" onClick={() => alert('Button clicked!')} />`
      },
      {
        title: 'Styled Button',
        description: 'Button with custom Tailwind CSS classes',
        component: (
          <Button 
            label="Styled Button" 
            onClick={() => alert('Styled button clicked!')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        ),
        code: `<Button 
  label="Styled Button" 
  onClick={() => alert('Styled button clicked!')}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
/>`
      },
      {
        title: 'Submit Button',
        description: 'Button with submit type for forms',
        component: (
          <Button 
            label="Submit" 
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          />
        ),
        code: `<Button 
  label="Submit" 
  type="submit"
  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
/>`
      }
    ]
  },
  {
    name: 'Banner',
    description: 'Alert and notification banners with different variants and styles.',
    category: 'Feedback',
    examples: [
      {
        title: 'Success Banner',
        description: 'Single line success notification',
        component: (
          <Banner 
            variant="success" 
            isSingleLine={true}
            title="Operation completed successfully!"
          />
        ),
        code: `<Banner 
  variant="success" 
  isSingleLine={true}
  title="Operation completed successfully!"
/>`
      },
      {
        title: 'Error Banner',
        description: 'Multi-line error notification with subtitle',
        component: (
          <Banner 
            variant="error" 
            isSingleLine={false}
            title="Something went wrong"
            subTitle="Please check your input and try again. If the problem persists, contact support."
          />
        ),
        code: `<Banner 
  variant="error" 
  isSingleLine={false}
  title="Something went wrong"
  subTitle="Please check your input and try again. If the problem persists, contact support."
/>`
      },
      {
        title: 'Info Banner',
        description: 'Information banner with additional details',
        component: (
          <Banner 
            variant="info" 
            isSingleLine={false}
            title="New features available"
            subTitle="Check out the latest updates to improve your workflow."
          />
        ),
        code: `<Banner 
  variant="info" 
  isSingleLine={false}
  title="New features available"
  subTitle="Check out the latest updates to improve your workflow."
/>`
      },
      {
        title: 'Warning Banner',
        description: 'Warning notification for important alerts',
        component: (
          <Banner 
            variant="warn" 
            isSingleLine={true}
            title="Your session will expire in 5 minutes"
          />
        ),
        code: `<Banner 
  variant="warn" 
  isSingleLine={true}
  title="Your session will expire in 5 minutes"
/>`
      }
    ]
  },
  {
    name: 'Tooltip',
    description: 'Interactive tooltips that provide contextual information on hover.',
    category: 'Feedback',
    examples: [
      {
        title: 'Basic Tooltip',
        description: 'Simple tooltip with title and description',
        component: (
          <Tooltip
            toolTipTitle="Help Information"
            toolTipDescription="This tooltip provides helpful context about the feature you're exploring."
          >
            <BiInfoCircle className="cursor-pointer text-blue-500 text-xl" />
          </Tooltip>
        ),
        code: `<Tooltip
  toolTipTitle="Help Information"
  toolTipDescription="This tooltip provides helpful context about the feature you're exploring."
>
  <BiInfoCircle className="cursor-pointer text-blue-500 text-xl" />
</Tooltip>`
      },
      {
        title: 'Button with Tooltip',
        description: 'Tooltip attached to a button element',
        component: (
          <Tooltip
            toolTipTitle="Save Action"
            toolTipDescription="Click to save your current progress. All changes will be preserved."
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save
            </button>
          </Tooltip>
        ),
        code: `<Tooltip
  toolTipTitle="Save Action"
  toolTipDescription="Click to save your current progress. All changes will be preserved."
>
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Save
  </button>
</Tooltip>`
      }
    ]
  }
];
