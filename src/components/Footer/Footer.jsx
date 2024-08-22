import React from 'react';
import { Box, Typography } from '@mui/material';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiLeetcode } from 'react-icons/si';

const customStyle = {
  fontSize: '20px',
  margin: '10px',
  cursor: 'pointer',
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35vh',
        background: 'linear-gradient(to bottom, transparent,#EEEDEB, #C7C8CC)',
        fontFamily:'Nunito'
      }}
    >
      <Typography fontFamily='Nunito' fontSize={20}>
        Made By <span style={{ color: 'blue' }}>Kareena</span>
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <IoLogoGithub style={customStyle} onClick={() => { window.open('https://github.com/kareenabhade'); }} />
        <FaLinkedin style={customStyle} onClick={() => { window.open('https://www.linkedin.com/in/kareena-bhade-b914a7260/'); }} />
        <SiGmail style={customStyle} onClick={() => { window.location.href = 'mailto:kareenabhade16@gmail.com'; }} />
        <SiLeetcode style={customStyle} onClick={() => { window.open('https://leetcode.com/u/kareenabhade/'); }} />
      </Box>
    </Box>
  );
};

export default Footer;
