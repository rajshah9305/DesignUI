import { useState, useCallback } from "react";
import axios from 'axios';
import CodeBlock from './components/CodeBlock';
import TextBlock from './components/TextBlock';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const MODELS = [
  { label: "Mistral-7B", value: "mistral" },
  { label: "Mixtral-8x7B", value: "mixtral" },
  { label: "Llama-3-70B", value: "llama3" }
];

const App = () => {
  const [model, setModel] = useState("mistral");
  const [input, setInput] = useState("");
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseSections = useCallback((markdown) => {
    const result = {};
    try {
      const sections = markdown.split(/(?=^(?:\d+\.|#{2,})\s)/m);

      sections.forEach(section => {
        const titleMatch = section.match(/^(?:\d+\.|#{2,})\s+([^\n]+)/);
        if (titleMatch) {
          const title = titleMatch[1].trim();
          const content = section.slice(titleMatch[0].length).trim();
          result[title] = content;
        }
      });

      return Object.keys(result).length ? result : { "Response": markdown.trim() };
    } catch (error) {
      console.error('Error parsing sections:', error);
      throw new Error('Failed to parse response sections');
    }
  }, []);

  // Fixed and completed extractLiveCode function
  const extractLiveCode = useCallback((sections) => {
    try {
      for (const content of Object.values(sections)) {
        const codeMatch = content.match(/```(\w*)\n([\s\S]*?)```/);
        if (codeMatch) {
          return {
            language: codeMatch[1] || 'plaintext',
            code: codeMatch[2]
          };
        }
      }
      return null;
    } catch (error) {
      console.error('Error extracting code:', error);
      return null;
    }
  }, []);

  // Handle form submission and API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSections({});
    try {
      const response = await axios.post(`${API_URL}/generate`, {
        model,
        prompt: input
      });
      const parsed = parseSections(response.data.markdown || response.data.text || "");
      setSections(parsed);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Rendering logic
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <h1>AI Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Model:
          <select value={model} onChange={e => setModel(e.target.value)}>
            {MODELS.map(m => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
        </label>
        <br />
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={6}
          style={{ width: "100%", marginTop: 12 }}
          placeholder="Enter your prompt here..."
        />
        <br />
        <button type="submit" disabled={loading || !input.trim()}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
      <div style={{ marginTop: 24 }}>
        {Object.entries(sections).map(([title, content]) => {
          const code = extractLiveCode({ [title]: content });
          return (
            <div key={title} style={{ marginBottom: 24 }}>
              <h2>{title}</h2>
              {code ? (
                <CodeBlock language={code.language} code={code.code} />
              ) : (
                <TextBlock text={content} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;