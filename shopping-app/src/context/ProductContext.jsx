import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchProducts, fetchColors, fetchMaterials, fetchFeatured } from '../utils/api';

// Create a context for products and filters
const ProductContext = createContext();

// Provider for product data and filters
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProductsData, setFilteredProductsData] = useState([]); // New state for filtered products


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const productsRes = await fetchProducts();
      const colorsRes = await fetchColors();
      const materialsRes = await fetchMaterials();
      const featuredRes = await fetchFeatured();

      setProducts(productsRes.data.products);
      setColors(colorsRes.data.colors);
      setMaterials(materialsRes.data.material);
      setFeatured(featuredRes.data.featured);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const filterFeaturedProducts = () => {
    setFilteredProductsData(featured);
  };

  const resetFilter = () => {
    setFilteredProductsData([]);
  }


  return (
    <ProductContext.Provider
      value={{
        products,
        colors,
        materials,
        featured,
        loading,
        filterFeaturedProducts,
        filteredProductsData,
        resetFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProducts = () => {
  return useContext(ProductContext);
};
