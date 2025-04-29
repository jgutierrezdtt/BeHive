import { AppBar, Toolbar, Typography, IconButton, Box, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SecurityIcon from '@mui/icons-material/Security';
import { Link } from 'react-router-dom';

interface ColorModeProps {
  colorMode: {
    mode: 'light' | 'dark';
    toggleColorMode: () => void;
  };
}

const Header = ({ colorMode }: ColorModeProps) => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <SecurityIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
            }}
          >
            Be Hive
          </Typography>
        </Box>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;