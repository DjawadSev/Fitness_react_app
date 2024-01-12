import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useState } from 'react';


import Logo from '../assets/images/Logo.png';


const Navbar = () => {
  
  return (
    <Stack
      className='navbar__container' 
      direction="row"
      justifyContent="space-between"
      sx={{ gap: {sm:'122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'},
            justifyContent: 'center'}} px="20px"
            >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Link to="/">
          <img src={Logo} alt='Logo' style={{
          width: '48', height: '48px', margin: '0 20px'}}
          />
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flex: '1' }}>
        <Stack 
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="flex-end"
          >
          <Link to="/" style={{ color: 'white',
                                        backgroundColor: '#FF2625',
                                        textDecoration: 'none',
                                          '&:hover': {
                                            backgroundColor: '#FF2613',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                                          },
                                        padding: '15px 32px',
                                        fontSize: '16px',
                                        borderRadius: '50px',
                                        transition: 'box-shadow 0.3s ease-in-out',}}>
            Home
          </Link>
          <a href='#exercises' style={{color: 'white',
                                        backgroundColor: '#FF2625',
                                        textDecoration: 'none',
                                          '&:hover': {
                                            backgroundColor: '#FF2613',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                                          },
                                        padding: '15px 32px',
                                        fontSize: '16px',
                                        borderRadius: '50px',
                                        transition: 'box-shadow 0.3s ease-in-out',  }}>
            Exercises
          </a> 
          
        </Stack>
      </div>
    </Stack>
  )
}
export default Navbar
