import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
createRoot(document.getElementById('root')).render(
   

   <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    
 
)
