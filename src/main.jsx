import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { banner_array, section_array, card_array } from "./constants";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App
      banner_array={banner_array}
      section_array={section_array}
      card_array={card_array}
    />
  </React.StrictMode>
);
