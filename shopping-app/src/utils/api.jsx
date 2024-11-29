import axios from 'axios';

 const api = axios.create({
  baseURL: 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest',
  headers: {
    Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
  },
});

// Get All products
export const fetchProducts = () => api.get('/products');

// Get All colors
export const fetchColors = () => api.get('/colors');

// Get All materials
export const fetchMaterials = () => api.get('/material');

// Get All Featured Product
export const fetchFeatured = () => api.get('/featured');
