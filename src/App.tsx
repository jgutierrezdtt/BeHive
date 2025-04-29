import { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Container,
  Box
} from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import TermDetails from './pages/TermDetails'
import Footer from './components/Footer'

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#f0c808', // Yellow for BeHive theme
          },
          secondary: {
            main: '#087f8c', // Teal as secondary color
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/BeHive">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <Header colorMode={{ mode, toggleColorMode }} />
          <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/term/:id" element={<TermDetails />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
