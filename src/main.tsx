
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  // App-level overrides and custom global styles
  import "./styles/globals.css";

  createRoot(document.getElementById("root")!).render(<App />);
  