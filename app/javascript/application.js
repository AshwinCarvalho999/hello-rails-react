// Entry point for the build script in your package.json
import React from "react";
import ReactDOM from "react-dom";
import "@hotwired/turbo-rails"
import "./controllers"
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);