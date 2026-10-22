import { Layout } from "./components/Layout"
import { BrowserRouter } from "react-router"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
});

function App() {


  return (
    <>
     <ThemeProvider theme={theme}>
     <BrowserRouter>
     <Layout></Layout>
     </BrowserRouter>
     </ThemeProvider>
    </>
  )
}

export default App
