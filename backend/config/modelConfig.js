export const getModelConfig = (model) => {
  const configs = {
    mistral: {
      url: process.env.OPENROUTER_API_URL || "https://api.openrouter.ai/v1/chat/completions",
      headers: { 
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.FRONTEND_URL || "http://localhost:5173"
      },
      model: "mistralai/mistral-7b-instruct"
    },
    mixtral: {
      url: process.env.TOGETHER_API_URL || "https://api.together.ai/v1/chat/completions",
      headers: { Authorization: `Bearer ${process.env.TOGETHER_API_KEY}` },
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1"
    },
    llama3: {
      url: process.env.GROQ_API_URL || "https://api.groq.com/openai/v1/chat/completions",
      headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      model: "meta-llama/llama-3-70b-instruct"
    }
  };

  const config = configs[model];
  if (!config) {
    throw new Error(`Invalid model: ${model}`);
  }

  if (!config.url || !config.headers.Authorization) {
    throw new Error(`Missing configuration for model: ${model}`);
  }

  return config;
};