# @akhil_dev/core-react-ui-component-library

> A modern, lightweight React UI component library built with TypeScript and styled with Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/@akhil_dev/core-react-ui-component-library.svg)](https://www.npmjs.com/package/@akhil_dev/core-react-ui-component-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📦 Installation

```bash
npm install @akhil_dev/core-react-ui-component-library
```

Or with yarn:

```bash
yarn add @akhil_dev/core-react-ui-component-library
```

## ⚠️ Required: Import Styles

**You must import the stylesheet for the components to render correctly:**

```tsx
// Add this import to your main entry file (main.tsx, App.tsx, or index.tsx)
import '@akhil_dev/core-react-ui-component-library/styles.css';
```

This CSS file contains all the Tailwind styles needed for the components. Without it, the components will appear unstyled.

## 🚀 Quick Start

**Important:** You must import the CSS file for components to display correctly.

```jsx
// 1. Import the CSS file first (in your main.tsx or App.tsx)
import '@akhil_dev/core-react-ui-component-library/styles.css';

// 2. Import and use components
import { Button, Badge, Banner, Tooltip, ToastPopUp } from '@akhil_dev/core-react-ui-component-library';

function App() {
  return (
    <div>
      <Button label="Click me!" onClick={() => alert('Hello!')} />
      <Badge badgeTitle="New" badgeColor="blue" badgeType="squared" />
      <Banner variant="success" title="Success!" description="Operation completed successfully." />
    </div>
  );
}
```

## 📚 Components

This library includes a growing collection of reusable React components:

- **Button** - Customizable button component with various styles
- **Badge** - Display status, labels, or counts with squared or pill variants
- **Banner** - Alert/notification banners with success, error, info, and warning variants
- **Tooltip** - Hoverable tooltips for additional information
- **ToastPopUp** - Toast notifications with customizable positioning

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe components
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tooling
- **React Icons** - Beautiful icon library

## 💡 Usage Examples

**Note:** Make sure you've imported the CSS file first (see above).

### Button Component

```jsx
import { Button } from '@akhil_dev/core-react-ui-component-library';

<Button 
  label="Submit" 
  onClick={handleSubmit}
  type="submit"
  className="custom-class"
/>
```

### Badge Component

```jsx
import { Badge } from '@akhil_dev/core-react-ui-component-library';

<Badge 
  badgeTitle="Beta" 
  badgeColor="purple" 
  badgeType="pill"
/>
```

### Banner Component

```jsx
import { Banner } from '@akhil_dev/core-react-ui-component-library';

<Banner 
  variant="error"
  title="Error Occurred"
  description="Please check your input and try again."
  showIcon={true}
/>
```

## 🎯 Project Goals

This project was created to:

1. **Portfolio Showcase** - Demonstrate modern React development skills
2. **Learn Component Design** - Master creating reusable, composable UI components
3. **Understand npm Publishing** - Learn the full lifecycle of publishing packages
4. **Deep Dive into React** - Strengthen React fundamentals through practical application


## 📝 License

This project is MIT licensed.

## 👤 Author

**Akhil Devarasetty** (akhil_dev)

- GitHub: [@AkhilDevarasetty](https://github.com/AkhilDevarasetty)
- npm: [@akhil_dev](https://www.npmjs.com/~akhil_dev)

## 🙏 Acknowledgments

Built as a learning project to explore React component architecture and npm package distribution.

---

Made with ❤️ and React
