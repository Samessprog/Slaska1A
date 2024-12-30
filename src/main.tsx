import React, { StrictMode, Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./Style/CSS/index.css";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import store from "./states/store.tsx";

// Lazy load the App component
const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
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
  </Provider>
);
