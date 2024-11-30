import {
  AppBar,
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import rghtImg from "../assets/images/RIGHTFIT.COM.png";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import shoppingCart from "../assets/images/mdi_cart-outline.png";
import { useProducts } from "../context/ProductContext";

const Header = () => {
  const { cartItems } = useCart();
  const { filterFeaturedProducts, resetFilter } = useProducts();
  const [open, setOpen] = useState(false);

  const handleCartClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFeaturedClick = () => {
    filterFeaturedProducts();
  };

  const handleAllProductsClick = () => {
    resetFilter();
  };

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
          alignItems="center"
          sx={{
            position: "relative",
            top: "10px",
            color: "white",
            width: "100%",
            padding: "10px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <img
              style={{
                maxWidth: "200px",
                height: "auto",
                paddingLeft: { sm: "31px", xs: "0px" },
              }}
              src={rghtImg}
              alt="RightFit Logo"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              pr: { sm: 2, xs: 0 },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Button onClick={() => handleAllProductsClick()}>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                }}
              >
                All Products
              </Typography>
            </Button>

            <Button onClick={() => handleFeaturedClick()}>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "300",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                }}
              >
                Featured Products
              </Typography>
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton onClick={() => handleCartClick()}>
                <img
                  style={{ height: "20px", width: "20px" }}
                  src={shoppingCart}
                  alt="Shopping cart"
                />
              </IconButton>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                }}
              >
                {cartItems?.length}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CartDrawer isOpen={open} onClose={handleClose} />
    </AppBar>
  );
};

export default Header;
