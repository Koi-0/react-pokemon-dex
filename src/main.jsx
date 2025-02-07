import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "the-new-css-reset/css/reset.css"; // css reset을 적용하여 브라우저마다 다른 기본 스타일 초기화
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
