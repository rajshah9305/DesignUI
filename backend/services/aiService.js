import axios from 'axios';

export const makeModelRequest = async (config, userInput) => {
  const response = await axios({
    method: 'post',
    url: config.url,
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    },
    data: {
      model: config.model,
      messages: [
        { role: 'system', content: process.env.SYSTEM_PROMPT },
        { role: 'user', content: userInput }
      ],
      max_tokens: 4000,
      temperature: 0.7
    },
    timeout: 120000
  });

  const output = response.data?.choices?.[0]?.message?.content;
  if (!output) {
    throw new Error('Invalid response from language model');
  }

  return output;
};