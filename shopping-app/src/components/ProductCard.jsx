import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { colors, materials } = useProducts();
  const { addToCart } = useCart();


  const colorName =
    colors?.find((item) => item.id === product.colorId)?.name || "NA";
  const materialName =
    materials?.find((item) => item.id === product.materialId)?.name || "NA";

  return (
    <Card>
      <Box
        sx={{
          position: "relative",
          "&:hover .hover-overlay": {
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            transition: "opacity 0.3s ease-in-out",
          },
        }}
      >
        <CardMedia
          component="img"
          height="442px"
          width="332px"
          image={
            product.image || "https://via.placeholder.com/300x400?text=No+Image"
          }
          alt={product.name}
          sx={{ objectFit: "cover", filter: "none", transition: "filter 0.3s" }}
        />
        <Box
          className="hover-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
          }}
          onClick={() => addToCart(product)}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Noto Serif",
            fontWeight: "500",
            fontSize: "18px",
            color: "#131414",
          }}
        >
          {product?.name}
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
            {colorName}
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
            {materialName}
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
          INR {parseInt(product?.price).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
