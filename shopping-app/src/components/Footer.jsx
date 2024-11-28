import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import paymetImg from '../assets/images/paymentImg.png';
import webProtectImg from '../assets/images/webProtectorImg.png';
import rghtImg from '../assets/images/RIGHTFIT.COM.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        py: 3,
        mt: 4,
        height: "305px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item
          sx={{
            mx: 4,
            my: 4,
          }}
          xs={12}
        >
          <img src={rghtImg} alt="RightImg" />
        </Grid>
        <Grid item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-evenly',
            mx: 4,
          }}
          xs={2}
        >
          <Typography>Home</Typography>
          <Typography>All Products</Typography>
          <Typography>Featured Products</Typography>
          <Typography>Contact</Typography>
          <Typography>About Us</Typography>
        </Grid>
        <Grid item sx={{ px: 4 }} xs={7}>
          <Typography sx={{ width: "623px" }}>
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes
          </Typography>
          <img
            src={paymetImg}
            style={{
              width: "329px",
              height: "55px",
              marginTop: "20px",
            }}
            alt=""
          />
        </Grid>
        <Grid size={3}>
          <Typography>Website protected by</Typography>
          <img
            src={webProtectImg}
            style={{
              width: "220px",
              height: "53px",
              marginTop: "20px",
            }}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
