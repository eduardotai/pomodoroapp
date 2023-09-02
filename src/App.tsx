import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Components/Router";
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from "./styles/themes/global";



export function App() {

  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
  </ThemeProvider>
  </BrowserRouter>
  )
}