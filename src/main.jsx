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
          background: "rgba(255, 255, 255, 0.18)",
          color: "#495E57",
          borderRadius: "16px",
          padding: "16px",
          fontWeight: "600",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.28)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.12)",
        },
        success: {
          duration: 4000,
          iconTheme: {
            primary: "#495E57",
            secondary: "#ffffff",
          },
        },
        error: {
          duration: 4000,
          iconTheme: {
            primary: "#d96c4f",
            secondary: "#ffffff",
          },
        },
      }}
    />
    </BrowserRouter>
  </StrictMode>,
)
