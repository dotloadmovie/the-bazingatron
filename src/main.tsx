import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import { BrowserRouter } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/anton";
import "./main.css";

const theme = createTheme();

theme.typography.h1 = {
  fontFamily: "anton",
  fontSize: 48,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
