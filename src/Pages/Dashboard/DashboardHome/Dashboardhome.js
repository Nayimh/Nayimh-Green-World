import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {  Route, Switch, useRouteMatch } from 'react-router-dom';
import './Dashboardhome.css'

import AddTree from '../AddTree/AddTree';
import MakdAdmin from '../MakeAdmin/MakdAdmin';
import { Link } from 'react-router-dom';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import useAuth from '../../../hooks/useAuth';
const drawerWidth = 240;

function Dashboardhome(props) {
  const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout } = useAuth();
    let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
          <Box className='container box'>
          <Link to="/home"><button className='dashbtn'>Home</button></Link>
          </Box>
      <Divider />
     
          <Box className='container box'>
          <Link to={`${url}/addTree`}><button className='dashbtn'>Add New Tree</button></Link>
          </Box>
      
          <Box className='container box'>
          <Link to={`${url}/makeAdmin`}><button className='dashbtn'>MakeAdmin</button></Link>
          </Box>
     
          <Box className='container box'>
          <Link to={`${url}/manageOrder`}><button className='dashbtn'>ManageOrder</button></Link>
          </Box>
          <Box className='container box'>
          <button className='dashbtn' onClick={logout}>Logout</button>
          </Box>
    
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            WELCOME TO DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={`${path}/manageOrder`}>
          <ManageAllOrder/>
        </Route>
        <Route exact path={`${path}/addTree`}>
         <AddTree/>
        </Route>
        <Route exact path={`${path}/makeAdmin`}>
         <MakdAdmin/>
        </Route>
          
      </Switch>
      </Box>
    </Box>
  );
}

Dashboardhome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboardhome;

