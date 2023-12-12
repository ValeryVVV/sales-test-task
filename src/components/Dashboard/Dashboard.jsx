import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ThemeProvider } from '@emotion/react';
import { Container, Grid, Paper, createTheme } from '@mui/material';
import ProductWidget from 'components/ProductWidget/ProductWidget';
import BasicLineChart from 'components/LineChart/LineChart';
import { TableProducts } from 'components/TableInfo/TableProductsInfo';

const defaultTheme = createTheme();

export default function Dashboard() {
  const [menuEl, setMenuEl] = useState(null);

  const handleMenu = (event) => {
    setMenuEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuEl(null);
  };

    return (
      
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {/* {auth && ( */}
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(menuEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Log in</MenuItem>
              </Menu>
            </div>
          {/* )} */}
        </Toolbar>
                </AppBar>
                        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Line Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <BasicLineChart />
                </Paper>
              </Grid>
              {/* ProductWidget */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ProductWidget />
                </Paper>
              </Grid>
              {/* TableProducts */}
              <Grid item xs={12}>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TableProducts />
                </Paper>
              </Grid>
            </Grid>
                    </Container>
                    </Box>
        </Box>
    </ThemeProvider>
  );
};
