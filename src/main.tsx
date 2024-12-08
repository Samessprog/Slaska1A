import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./Style/CSS/index.css";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

// Lazy load the App component
const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <Suspense
    fallback={
      <div className="loading">
        <PropagateLoader />
      </div>
    }
  >
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Suspense>
);
