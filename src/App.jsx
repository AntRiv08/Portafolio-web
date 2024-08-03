import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Inicio } from './pages/Inicio'
import { Contacto } from './pages/Contacto'
import { Estudios } from './pages/Estudios'
import { SocialMedia } from './components/SocialMedia'
import { Tecnologias } from './pages/Tecnologias'
import { Container, Paper, useMediaQuery } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PageBackground } from './components/PageBackground'
import { useState } from 'react'

function App () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode)
  const appTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    }
  })
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper
          elevation={0}
          sx={{ height: '100vh', display: 'grid', gridTemplate: '1fr , auto' }}
          square
        >
          <header>
            <Navbar mode={mode} setMode={setMode} />
          </header>
          <Container
            sx={{
              minHeight: '100vh',
              display: 'grid',
              gridTemplate: '1fr, auto'
            }}
          >
            <PageBackground />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/contactos' element={<Contacto />} />
              <Route path='/estudios' element={<Estudios />} />
              <Route path='/tecnologias' element={<Tecnologias />} />
              <Route path='/contactos' element={<Contacto />} />
            </Routes>
            <SocialMedia />
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App
