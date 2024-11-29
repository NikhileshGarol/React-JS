import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Button
} from "@mui/material";
import React, { useState } from "react";
import rghtImg from "../assets/images/RIGHTFIT.COM.png";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import shoppingCart from '../assets/images/mdi_cart-outline.png';
import { useProducts } from "../context/ProductContext";


const Header = () => {
  const { cartItems } = useCart();
  const {featured, filterFeaturedProducts, resetFilter} = useProducts();
  const [open, setOpen] = useState(false);

  const handleCartClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleFeaturedClick = () => {
    filterFeaturedProducts();
  };

  const handleAllProductsClick = () => {
    resetFilter();
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        boxShadow: 0,
        zIndex: 1,
      }}
    >
      <Box>
        <Grid
          container
          sx={{
            position: "relative",
            top: "10px",
            color: "white",
            width: "100%",
            padding: "10px",
          }}
          xs={12}
        >
          <Grid item style={{ maxWidth: "100%", height: "auto" }} xs={6}>
            <img style={{ paddingLeft: "31px" }} src={rghtImg} alt="RightImg" />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 4,
              pr: 2,
            }}
            xs={6}
          >
            <Button onClick={() => handleAllProductsClick()}>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  textTransform: 'capitalize'
                }}
              >
                All Products
              </Typography>
            </Button>
            <Button onClick={() => handleFeaturedClick()}>
            <Typography
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#FFFFFF",
                textTransform: 'capitalize'
              }}
            >
              Featured Products
            </Typography>
            </Button>
            <Button onClick={() => handleCartClick()}>
              <img src={shoppingCart} alt="Shopping cart" />
            </Button>
            <Typography>{cartItems?.length || 0}</Typography>
          </Grid>
        </Grid>
      </Box>
      <CartDrawer isOpen={open} onClose={handleClose} />
    </AppBar>
  );
};

export default Header;
