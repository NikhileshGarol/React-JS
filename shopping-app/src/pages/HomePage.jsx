import React, { useEffect, useState } from 'react';
import { Container, Pagination, Typography, Grid, Box } from '@mui/material';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  // Fetch product data once when the component mounts
  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchData]);

  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  // Mock product data
  const totalProducts = 20;
  const productList = Array.from({ length: totalProducts }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  // Paginated products
  const paginatedProducts = productList.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={2}>
        {/* Sidebar for Filters */}
        <Grid spacing={4} sx={{ height: "100vh" }} item xs={2}>
          <Typography sx={{fontSize: '16px', fontWeight: '700'}}>Filter</Typography>
          <Box sx={{my: 2}}>
            <Typography>Materials</Typography>
            <Typography>Category</Typography>
          <Typography>Price</Typography>
          </Box>
          <Box sx={{my: 2}}>
          <Typography>Color</Typography>
          <Typography>Price</Typography>
          <Typography>Brand</Typography>
          <Typography>Ratings</Typography>
          </Box>
        </Grid>

        {/* Product List */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {paginatedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {/* Pagination */}
          <Pagination
            count={Math.ceil(totalProducts / productsPerPage)}
            page={page}
            onChange={handlePageChange}
            sx={{ mt: 2 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
