import React from 'react';
import ResponsiveDrawer from '../Home/ResponsiveDrawer';
import Footer from '../Footer/Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveDrawer />
      <Box sx={{ marginLeft:{ lg:'240px', md:'200px'}}}>
        {children}
        <Footer />
      </Box>
    </div>
  );
};

export default Layout;
