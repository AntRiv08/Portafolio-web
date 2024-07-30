import {
  AppBar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const Navbar = () => {
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
          <IconButton edge='start' color='default' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Typography variant='body2' color='text.primary'>
                  Inicio
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Typography variant='body2' color='text.primary'>
                  Tecnologías que manejo
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Typography variant='body2' color='text.primary'>
                  Mis estudios
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center'
            }}
          >
            {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />    */}
            <MenuItem sx={{ py: '6px', px: '12px' }}>
              <Typography variant='body2' color='text.primary'>
                Contactos
              </Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
