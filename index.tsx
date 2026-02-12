
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("FBMX Global: Starting application...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("FBMX Global Error: Root element '#root' not found in DOM.");
  throw new Error("Could not find root element to mount to");
}

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
}
