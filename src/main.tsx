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

// Add Vapi AI Widget dynamically — only once
// const addVapiWidget = () => {
// if (document.querySelector("vapi-widget")) return; // Prevent duplicates

// const vapiScript = document.createElement("script");
// vapiScript.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
// vapiScript.async = true;
// vapiScript.type = "text/javascript";
// vapiScript.onload = () => {
// const widget = document.createElement("vapi-widget");
// widget.setAttribute("assistant-id", "00e14023-bdf9-41c2-b9ad-dee6af725b84");
// widget.setAttribute("public-key", "246057c7-3986-48a1-a9ae-afa85e9caa85");
// // widget.setAttribute("base-color", "#F5F5F5");
// // widget.setAttribute("accent-color", "#223F92");
// // widget.setAttribute("button-base-color", "#162541");
// // widget.setAttribute("button-accent-color", "#FBD100");
// document.body.appendChild(widget);
// };
// document.body.appendChild(vapiScript);
// };


// addVapiWidget();

