import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#495E57",
            borderRadius: "16px",
            padding: "16px",
            fontWeight: "600",
          },
          success: {
            duration: 4000,
          },
          error: {
            duration: 4000,
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
)
