import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ShopProvider } from "./context/ShopContext";
import { AppUIProvider } from "./context/AppUIContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppUIProvider>
          <ShopProvider>
            <App />
          </ShopProvider>
      </AppUIProvider>
    </BrowserRouter>
  </React.StrictMode>

);