import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      // Usado em botões, links e etc
      light: yellow[500],
      main: yellow[700],
      dark: yellow[800],
      contrastText: '#fff'
    },
    secondary: {
      light: cyan[500],
      main: cyan[700],
      dark: cyan[800],
      contrastText: '#fff'
    },
    background: {
      default: '#303134',
      paper: '#202124'
    }
  }
})