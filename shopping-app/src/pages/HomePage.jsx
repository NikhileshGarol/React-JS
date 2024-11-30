import React, { useEffect, useState } from "react";
import {
  Container,
  Pagination,
  Typography,
  Grid,
  Box,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";
import xIcon from "../assets/images/X.png";
import headerImg from "../assets/images/headerImg.png";

const HomePage = () => {
  const { products, colors, materials, loading, filteredProductsData } =
    useProducts();
  const [selectedFilter, setSelectedFilter] = useState("");
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  console.log("filteredProductsData", filteredProductsData);

  // Filter products based on selected filter
  const filteredProducts = selectedFilter
    ? products.filter((product) =>
        selectedFilter.type === "color"
          ? product.colorId === selectedFilter.id
          : product.materialId === selectedFilter.id
      )
    : filteredProductsData && filteredProductsData.length > 0
    ? products.filter((product) =>
        filteredProductsData.some(
          (filteredProduct) => filteredProduct.productId === product.id
        )
      )
    : products;

  // Paginate filtered products
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  const handleFilterClick = (type, id, name) => {
    setSelectedFilter({ type, id, name });
    setPage(1);
  };

  return (
    <Box>
      {!loading ? (
        <>
          <img
            src={headerImg}
            alt={"alt"}
            style={{
              width: "100%",
              height: "575px",
              objectFit: "cover",
              marginTop: -100,
              padding: 0,
              display: "block",
            }}
          />
          <Container sx={{ my: 4 }}>
            <Grid container spacing={2}>
              {/* Sidebar for Filters */}
              <Grid spacing={4} sx={{ height: "100vh" }} item xs={2}>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  Filter
                </Typography>
                {/* Materials Filter */}
                <Box sx={{ my: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#000000",
                      textTransform: "capitalize",
                      mb: 2,
                    }}
                  >
                    Materials
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#000000",
                      textTransform: "capitalize",
                      pb: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedFilter("")} // Reset filter
                  >
                    All
                  </Typography>
                  {materials?.map((item) => (
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#000000",
                        textTransform: "capitalize",
                        pb: "4px",
                        cursor: "pointer",
                      }}
                      key={item.id}
                      onClick={() =>
                        handleFilterClick("material", item.id, item.name)
                      }
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Box>
                {/* Colors Filter */}
                <Box sx={{ my: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#000000",
                      textTransform: "capitalize",
                      mb: 2,
                    }}
                  >
                    Color
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#000000",
                      textTransform: "capitalize",
                      pb: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedFilter("")} // Reset filter
                  >
                    All
                  </Typography>
                  {colors?.map((item) => (
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#000000",
                        textTransform: "capitalize",
                        pb: "4px",
                        cursor: "pointer",
                      }}
                      key={item.id}
                      onClick={() =>
                        handleFilterClick("color", item.id, item.name)
                      }
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              {/* Product List */}
              <Grid item xs={9}>
                {selectedFilter && (
                  <Box
                    sx={{
                      bgcolor: "#E4E4E4",
                      border: "1px solid #E4E4E4",
                      width: "91px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      cursor: "pointer",
                      mb: 4,
                    }}
                    onClick={() => setSelectedFilter("")}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans",
                        fontSize: "16px",
                        fontWeight: "700",
                        textTransform: "capitalize",
                        color: "#000000",
                      }}
                    >
                      {selectedFilter.name}
                    </Typography>
                    <img src={xIcon} alt="X" />
                  </Box>
                )}
                <Grid container spacing={2}>
                  {paginatedProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Pagination */}
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  count={Math.ceil(filteredProducts.length / productsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  sx={{ mt: 2 }}
                />
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh", // You can adjust height as needed
          }}
        >
          <CircularProgress sx={{ mb: 2 }} /> {/* Spinner */}
          <Typography variant="h6">{"Loading"}</Typography>{" "}
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
