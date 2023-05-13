import React from "react";
import { createRoot } from "react-dom/client";
import 'antd/dist/reset.css';
import "./index.css";
import App from "./App";

// const App = () => {
//   return (
//     <div className="App">
//       <App/>
//     </div>
//   );
// };

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
