import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TourProvider } from "./context/tourContext";
import { SidebarProvider } from "./context/sidebarContext";
import { I18nextProvider } from "react-i18next";
import "./i18n/i18n";
import i18n from "./i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TourProvider>
    <I18nextProvider i18n={i18n}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </I18nextProvider>
  </TourProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
