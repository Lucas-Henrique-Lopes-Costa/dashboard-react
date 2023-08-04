import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
