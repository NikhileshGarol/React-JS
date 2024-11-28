import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const ProductCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="442px"
        width='332px'
        image="https://via.placeholder.com/345x200" // Placeholder image
        alt="Product Name"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Product Name
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: 50, overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          This is a brief description of the product. It's concise and to the point.
        </Typography>
        <Typography variant="h6" component="div" color="primary" sx={{ mt: 2 }}>
          $99.99
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" sx={{ textTransform: 'none' }}>
          View Details
        </Button>
        <Button size="small" color="secondary" sx={{ textTransform: 'none' }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
