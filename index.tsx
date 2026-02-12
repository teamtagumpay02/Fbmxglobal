
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("FBMX Global: Starting application...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("FBMX Global Error: Root element '#root' not found in DOM.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("FBMX Global: React render initiated.");
  } catch (err) {
    console.error("FBMX Global: Failed to render app", err);
    rootElement.innerHTML = `
      <div class="error-fallback">
        <h1 style="color: #f43f5e; font-size: 1.5rem; margin-bottom: 1rem;">System Initialization Error</h1>
        <p style="color: #94a3b8; font-size: 0.875rem;">The application failed to start. This is often caused by missing environment variables or network issues.</p>
        <pre style="margin-top: 2rem; padding: 1rem; background: #1e293b; border-radius: 0.5rem; color: #e2e8f0; font-size: 0.75rem; text-align: left; max-width: 100%; overflow: auto;">${err instanceof Error ? err.message : String(err)}</pre>
        <button onclick="window.location.reload()" style="margin-top: 2rem; padding: 0.5rem 1.5rem; background: #2dd4bf; color: #020617; border-radius: 0.5rem; font-weight: bold; border: none; cursor: pointer;">Retry Connection</button>
      </div>
    `;
  }
}
