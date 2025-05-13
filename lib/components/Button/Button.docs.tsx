import { Button } from '@lib/components';

export default function ButtonDocs() {
  return (
    <div>
      <h1>Button Component</h1>
      <p>A simple button for demonstration. Use the <code>label</code> prop to set the text.</p>
      <Button label="Demo Button" onClick={() => alert('Demo!')} />
      <pre>{`<Button label="Demo Button" onClick={() => alert('Demo!')} />`}</pre>
    </div>
  );
}
