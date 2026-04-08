
import './styles/App.css'
import "./styles/fonts.css"
import { createTheme, ThemeProvider} from "@mui/material/styles"


const theme = createTheme({
  typography: {
    fontFamily: ["IBM Plex Sans Arabic"],
  }
})
function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </>
  )
}

export default App
