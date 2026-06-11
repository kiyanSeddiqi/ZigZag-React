import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./features/auth/context/AuthContext.jsx";
import ModalProvider from "./features/product/context/ModalContext.jsx";
import CartProvider from "./features/cart/context/CartContext.jsx";
import ProductsProvider from "./features/product/context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <ModalProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ModalProvider>
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>,
);
