import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack
      className='navbar__container' 
      direction="row"
      justifyContent="space-around"
      sx={{ gap: {sm:'122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'},
       justifyContent: 'none'}} px="20px"
    >
      <Link to="/">
      <img src={Logo} alt='Logo' style={{
        width: '48', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack 
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#FF2625', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none', color:
         '#FF2625', borderBottom: "3px solid #FF2625" }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
