import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import Churan from "./Churan.jsx";

const reactElement = React.createElement(
  'a',
  {'href': 'https://google.com', 'target': '_blank'},
  'click here to visit Google.'
)

createRoot(document.getElementById("root")).render(
  // <>
  //   <App />
  //   <Churan />
  // </>

  reactElement
);
