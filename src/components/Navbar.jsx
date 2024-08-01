import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { NavListDrawer } from '../components/NavListDrawer'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          variant='regular'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '20px',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <IconButton
            edge='start'
            color='default'
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={open}
            anchor='left'
            onClick={() => setOpen(false)}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <NavListDrawer />
          </Drawer>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <MenuItem>
                <Typography variant='body2' color='text.primary'>
                  <Link to='/'>Inicio </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant='body2' color='text.primary'>
                  <Link to='/tecnologias'>Tecnologías que manejo </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant='body2' color='text.primary'>
                  <NavLink to='/estudios'>Mis estudios </NavLink>
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 0.5,
              alignItems: 'center'
            }}
          >
            <MenuItem sx={{ py: '6px', px: '12px' }}>
              <Typography variant='body2' color='text.primary'>
                <Link to='/contactos'>Contactos </Link>
              </Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
