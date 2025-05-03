import { getModelConfig } from '../config/modelConfig.js';
import { makeModelRequest } from '../services/aiService.js';

export const handleAIRequest = async (req, res) => {
  const { userInput, model } = req.body;

  try {
    if (!userInput?.trim()) {
      return res.status(400).json({ 
        error: "Missing user input",
        timestamp: new Date().toISOString()
      });
    }

    if (!model?.trim()) {
      return res.status(400).json({ 
        error: "Missing model selection",
        timestamp: new Date().toISOString()
      });
    }

    const modelConfig = getModelConfig(model.toLowerCase());
    const response = await makeModelRequest(modelConfig, userInput);

    res.json({ 
      output: response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API Error:', error);
    
    const status = error.response?.status || 500;
    const message = process.env.NODE_ENV === 'production' 
      ? 'An error occurred while processing your request'
      : error.message;
    
    res.status(status).json({
      error: message,
      timestamp: new Date().toISOString()
    });
  }
};