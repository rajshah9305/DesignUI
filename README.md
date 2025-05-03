# DesignUI - AI-Powered UI Design Assistant

<div align="center">

![DesignUI Logo](path_to_logo.png) *(Optional: Add your logo)*

[![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/DesignUI)](https://github.com/YOUR_USERNAME/DesignUI/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/DesignUI)](https://github.com/YOUR_USERNAME/DesignUI/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/DesignUI)](https://github.com/YOUR_USERNAME/DesignUI/issues)

An advanced UI design assistant powered by multiple AI models to help create sophisticated, premium-grade user interfaces.

[Live Demo](your_demo_link) · [Report Bug](https://github.com/YOUR_USERNAME/DesignUI/issues) · [Request Feature](https://github.com/YOUR_USERNAME/DesignUI/issues)

</div>

## 🌟 Features

- 🤖 **Multiple AI Models Support**
  - Mistral-7B
  - Mixtral-8x7B
  - Llama-3-70B

- 💻 **Advanced Code Generation**
  - Real-time code generation
  - Syntax highlighting
  - Multiple language support

- 🎨 **UI/UX Features**
  - Dark mode interface
  - Responsive design
  - Code preview
  - Markdown support

## 🚀 Tech Stack

### Backend
- Node.js
- Express
- Axios
- CORS
- Rate Limiting

### Frontend
- React
- Vite
- TailwindCSS
- React Syntax Highlighter

### AI Integration
- OpenRouter API
- Together AI
- Groq

## 📋 Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)
- API keys for:
  - OpenRouter
  - Together AI
  - Groq

## 💻 Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/DesignUI.git
cd DesignUI
Collapse Code

Reject
Accept
Install Dependencies
Terminal



# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Configure Environment Variables
Backend (.env):




OPENROUTER_API_KEY=your_key
TOGETHER_API_KEY=your_key
GROQ_API_KEY=your_key
PORT=5001
Collapse Code

Frontend (.env):




VITE_API_URL=http://localhost:5001
Collapse Code

🚀 Usage
Start the Development Servers
Terminal



# Start both backend and frontend
npm run dev

# Or start separately:
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
Access the Application
Open your browser and navigate to http://localhost:5173
Select an AI model from the dropdown
Enter your UI design requirements
Click "Generate" to receive AI-powered suggestions
📖 API Documentation
POST /api/ask
Generate UI design suggestions and code.

Request Body:




{
  "userInput": "string",
  "model": "string"
}
Collapse Code

Response:




{
  "output": "string",
  "timestamp": "string"
}
Collapse Code

🛠️ Development
Available Scripts
Terminal



# Start development servers
npm run dev

# Build frontend
npm run build

# Run tests
npm run test

# Start production server
npm run start:prod
Project Structure



DesignUI/
├── backend/           # Node.js/Express backend
│   ├── controllers/   # Request handlers
│   ├── services/     # Business logic
│   └── config/       # Configuration files
├── frontend/         # React/Vite frontend
│   ├── src/         # Source files
│   ├── components/  # React components
│   └── styles/      # CSS/styling files
└── package.json     # Root package.json
Collapse Code

🤝 Contributing
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
Distributed under the MIT License. See LICENSE for more information.

👥 Authors
Your Name - @YOUR_USERNAME
🙏 Acknowledgments
OpenRouter
Together AI
Groq
React
Vite
TailwindCSS
📞 Contact
Your Name - @your_twitter - email@example.com

Project Link: https://github.com/YOUR_USERNAME/DesignUI
