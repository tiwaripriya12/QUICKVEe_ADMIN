import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const TopIcon = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quickvee
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'hidden md:block' } }}>
            Vape Store
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      {/* Render your menu or content conditionally based on the menuOpen state */}
      {menuOpen && (
        <div>
          {/* Your menu content goes here */}
          <Typography>Menu Content</Typography>
        </div>
      )}
    </Box>
  );
};

export default TopIcon;
