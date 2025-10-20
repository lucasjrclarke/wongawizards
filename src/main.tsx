import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Import styles
import './styles/reset.css'
import './styles/variables.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/landing.css'
import './index.css'

// Mount React app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Add Vapi AI Widget dynamically after the app loads
const vapiScript = document.createElement("script");
vapiScript.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
vapiScript.async = true;
vapiScript.type = "text/javascript";
document.body.appendChild(vapiScript);

const vapiWidget = document.createElement("vapi-widget");
vapiWidget.setAttribute("assistant-id", "00e14023-bdf9-41c2-b9ad-dee6af725b84");
vapiWidget.setAttribute("public-key", "246057c7-3986-48a1-a9ae-afa85e9caa85");
document.body.appendChild(vapiWidget);
