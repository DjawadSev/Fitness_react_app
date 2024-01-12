import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Footer = () => (
  <Box mt="40px"  bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="10px" pt="25px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Go Hard</Typography>
  </Box>
);

export default Footer;
