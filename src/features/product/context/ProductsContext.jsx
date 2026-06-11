import { createContext, useEffect, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";

export const ProductsContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const {
    data: productsData,
    isLoading,
    errorMsg,
  } = useFetchData(`${API_URL}/products`);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
      setShuffledProducts([...productsData].sort(() => Math.random() - 0.5));
    }
  }, [productsData]);

  function updateProductStock(productId, newStock) {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, stock: newStock } : p)),
    );
    setShuffledProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, stock: newStock } : p)),
    );
  }

  const contextValue = {
    products,
    isLoading,
    errorMsg,
    shuffledProducts,
    updateProductStock,
  };
  return (
    <>
      <ProductsContext.Provider value={contextValue}>
        {children}
      </ProductsContext.Provider>
    </>
  );
}

export default ProductsProvider;
