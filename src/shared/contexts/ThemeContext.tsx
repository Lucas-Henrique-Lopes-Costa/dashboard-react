import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";

import { DarkTheme, LightTheme } from "./../themes";

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setThemeName((prevThemeName) => {
      if (prevThemeName === 'light') {
        return 'dark';
      }
      return 'light';
    });
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') {
      return LightTheme;
    }
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName,  toggleTheme }}>
      <ThemeProvider theme={DarkTheme}>
         <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
         </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
