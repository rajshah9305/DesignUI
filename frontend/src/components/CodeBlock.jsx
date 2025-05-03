import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language = "jsx" }) => (
  <SyntaxHighlighter 
    language={language}
    style={oneDark}
    className="rounded mb-2"
    showLineNumbers={true}
    wrapLines={true}
  >
    {code}
  </SyntaxHighlighter>
);

export default CodeBlock;