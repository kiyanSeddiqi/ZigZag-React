import { useContext, useState } from "react";
import { CartContext } from "../../features/cart/context/CartContext";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Actionbar from "./navigation/Actionbar";
import Navbar from "./navigation/Navbar";
import BottomNav from "./navigation/BottomNav";
import ProductModal from "../../features/product/components/ProductModal";
import Search from "../../features/search/components/Search";
import AuthModal from "../../features/auth/components/AuthModal";
import ShopCart from "../../features/cart/components/ShopCart";
import ScrollTop from "../ui/ScrollTop";
import Footer from "./footer/Footer";

function MainLayout() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { showCart, setShowCart, cartData } = useContext(CartContext);
  return (
    <>
      <header>
        <Navbar>
          <Actionbar
            onShowSearch={setShowSearch}
            onShowAuth={setShowAuthModal}
            onShowCart={setShowCart}
            cartLength={cartData.length}
          />
        </Navbar>
      </header>
      <ScrollTop />
      <main>
        <Outlet />
      </main>
      <Footer />
      <nav>
        <BottomNav
          onShowSearch={setShowSearch}
          onShowAuth={setShowAuthModal}
          onShowCart={setShowCart}
          cartLength={cartData.length}
        />
      </nav>
      <ProductModal />
      <Search isOpen={showSearch} onShow={setShowSearch} />
      <AuthModal isOpen={showAuthModal} onShow={setShowAuthModal} />
      <ShopCart isOpen={showCart} onShow={setShowCart} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnHover
        closeButton={false}
      />
    </>
  );
}

export default MainLayout;
