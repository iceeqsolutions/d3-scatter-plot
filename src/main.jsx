import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <App />
    <Footer />
  </StrictMode>
);
