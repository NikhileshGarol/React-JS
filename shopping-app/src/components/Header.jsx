import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Grid
} from "@mui/material";
import React from "react";
import headerImg from "../assets/images/headerImg.png";
import rghtImg from "../assets/images/RIGHTFIT.COM.png";
import shoppingCart from '../assets/images/mdi_cart-outline.png';

const Header = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Box>
        <img
          src={headerImg}
          style={{
            width: "100%",
            height: "575px",
            objectFit: "cover",
          }}
          alt="Header background"
        />
        <Grid
          container
          sx={{
            position: "absolute",
            top: "10px",
            color: "white",
            width: "100%",
            padding: "10px",
          }}
          xs={12}
        >
          <Grid item style={{ maxWidth: "100%", height: "auto" }} xs={6}>
            <img style={{paddingLeft: '31px'}} src={rghtImg} alt="RightImg" />
          </Grid>
          <Grid item
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 4,
              pr: 2,
            }}
            xs={6}
          >
            <Typography>All Products</Typography>
            <Typography>Featured Products</Typography>
            <img
            src={shoppingCart}
            alt="Shopping cart"
             />
             <Typography>0</Typography>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Header;
