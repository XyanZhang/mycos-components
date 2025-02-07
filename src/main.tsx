import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme/ThemeContext";
import "./index.css";
import { Button } from "./components/base/Button/Button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div>My Component Library</div>
      {/* 引入组件 */}
      <Button label="按钮">按钮</Button>
    </ThemeProvider>
  </React.StrictMode>
);
