import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import paymetImg from "../assets/images/paymentImg.png";
import webProtectImg from "../assets/images/webProtectorImg.png";
import rghtImg from "../assets/images/RIGHTFIT.COM.png";
import { useProducts } from "../context/ProductContext";

const Footer = () => {
  const { filterFeaturedProducts, resetFilter } = useProducts();

  const handleFeaturedClick = () => {
    filterFeaturedProducts();
  };

  const handleAllProductsClick = () => {
    resetFilter();
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        py: 3,
        mt: 4,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Logo Section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
          }}
        >
          <img
            src={rghtImg}
            alt="RightFit Logo"
            style={{
              maxWidth: "150px",
              height: "auto",
            }}
          />
        </Grid>

        {/* Links Section */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 1,
          }}
        >
          <Typography sx={{ cursor: "pointer" }} variant="body2">
            Home
          </Typography>
          <Typography
            onClick={() => handleAllProductsClick()}
            sx={{ cursor: "pointer" }}
            variant="body2"
          >
            All Products
          </Typography>
          <Typography
            onClick={() => handleFeaturedClick()}
            sx={{ cursor: "pointer" }}
            variant="body2"
          >
            Featured Products
          </Typography>
          <Typography sx={{ cursor: "pointer" }} variant="body2">
            Contact
          </Typography>
          <Typography sx={{ cursor: "pointer" }} variant="body2">
            About Us
          </Typography>
        </Grid>

        {/* Payment Info Section */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              width: "623px",
              marginBottom: "16px",
              fontFamily: "Nunito Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#FFFFFF",
            }}
          >
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes.
          </Typography>
          <img
            src={paymetImg}
            alt="Payment Methods"
            style={{
              width: "329px",
              height: "55px",
            }}
          />
        </Grid>

        {/* Website Protection Section */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="body2">Website protected by</Typography>
          <img
            src={webProtectImg}
            alt="Website Protection"
            style={{
              width: "220px",
              height: "53px",
              marginTop: "16px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
