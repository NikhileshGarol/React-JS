import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Card,
  Grid,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";

const CartDrawer = ({isOpen, onClose}) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const {colors, materials} = useProducts();
  
  const getColorName = (item) => {
    const colorName =
    colors?.find((color) => color.id === item)?.name || "NA";
    return colorName;
  }

  const getMaterialName = (item) => {
    const materialName =
    materials?.find((material) => material.id === item)?.name || "NA";
    return materialName;
  }
  


  return (
    <>
      {/* <Button onClick={toggleDrawer}>View Cart</Button> */}
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <Box
          sx={{
            height: "100vh",
            width: "516px",
            p: 2,
            bgcolor: "#D9D9D9",
            overflowY: "auto",
          }}
        >
          <Typography
            sx={{
              mb: 1,
              mt: 6,
              fontFamily: "Noto Serif",
              fontWeight: "500",
              fontSize: "18px",
              color: "#131414",
            }}
          >
            Shopping Cart
          </Typography>
          <Box sx={{ m: 4 }}>
            {cartItems.map((item) => (
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  mb: 2,
                  bgcolor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    item?.image ||
                    "https://via.placeholder.com/175x234?text=No+Image"
                  }
                  alt={item?.name}
                  sx={{
                    width: "175px",
                    height: "234px",
                    objectFit: "cover",
                    border: "1px solid grey",
                  }}
                />

                <CardContent sx={{ ml: 2 }}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontFamily: "Noto Serif",
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#131414",
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        mr: 2,
                        fontFamily: "Nunito Sans",
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#4F4733",
                      }}
                    >
                      {getColorName(item?.colorId)}
                    </Typography>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontFamily: "Nunito Sans",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#4F4733",
                      }}
                    >
                      {getMaterialName(item?.materialId)}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#5A112B",
                    }}
                  >
                    INR {parseInt(item?.price).toFixed(2)}
                  </Typography>
                  <Button
                    onClick={() => removeFromCart(item?.id)}
                    sx={{
                      bgcolor: "#3F3737",
                      borderRadius: 0,
                      mt: 2,
                      "&:hover": {
                        bgcolor: "#3F3737",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#FFFFFF",
                      }}
                    >
                      Remove
                    </Typography>
                    <Typography sx={{ marginLeft: "10px", color: "#FFFFFF" }}>
                      X
                    </Typography>
                    {/* <img style={{ marginLeft: "10px", color: '#FFFFFF' }} src={xIcon} alt="X" /> */}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
          {cartItems.length > 0 ? (
            <Button
              fullWidth
              onClick={clearCart}
              sx={{
                bgcolor: "#3F3737",
                borderRadius: 0,
                "&:hover": {
                  bgcolor: "#3F3737",
                  boxShadow: "none",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Clear Cart
              </Typography>
            </Button>
          ) : (
            <Typography
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              No items in the cart
            </Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
