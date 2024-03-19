import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { store } from "./redux/store.js";
axios.defaults.baseURL = "http://localhost:8000/api/v1";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  </React.StrictMode>
);
