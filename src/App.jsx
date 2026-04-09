
import './styles/App.css'
import "./styles/fonts.css"
import { createTheme, ThemeProvider} from "@mui/material/styles"
import Card from './components/Card'

const theme = createTheme({
  typography: {
    fontFamily: ["IBM Plex Sans Arabic"],
  }
})
function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card />
      </ThemeProvider>
    </>
  )
}

export default App
