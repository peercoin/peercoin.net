import React from "react";
import ReactDOM from "react-dom/client";
import smoothscroll from "smoothscroll-polyfill";
import App from "./App.jsx";
import "./i18n.js";
import { handleHash } from "./helpers/Hash.js";

window.onload = handleHash;

smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
