import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section className="container">
      <App userName="sikzyo" name="Zyo" initialIsFollowing />
      <App userName="Midudev" name="Miguel Ángel Duran" />
    </section>
  </StrictMode>
);
