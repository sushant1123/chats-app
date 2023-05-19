import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.js";

import App from "./App.jsx";

// contexts
import SettingsProvider from "./contexts/SettingsContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>
);
