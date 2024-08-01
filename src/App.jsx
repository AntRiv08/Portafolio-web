import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Inicio } from './pages/Inicio'
import { Contacto } from './pages/Contacto'
import { Estudios } from './pages/Estudios'
import { SocialMedia } from './components/SocialMedia'
import { Tecnologias } from './pages/Tecnologias'
import { Container } from '@mui/material'

function App () {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container
        sx={{
          mt: '40vh',
          minHeight: '100vh',
          display: 'grid',
          gridTemplate: '1fr, auto'
        }}
      >
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contactos' element={<Contacto />} />
          <Route path='/estudios' element={<Estudios />} />
          <Route path='/tecnologias' element={<Tecnologias />} />
          <Route path='/contactos' element={<Contacto />} />
        </Routes>
      </Container>
      <SocialMedia />
    </>
  )
}

export default App
