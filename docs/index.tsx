import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);
