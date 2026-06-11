import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/home/Home";
import MainLayout from "./components/layout/MainLayout";
import PageLoader from "./components/ui/PageLoader";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ShopPage = lazy(() => import("./features/product/pages/ShopPage"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetailPage = lazy(
  () => import("./features/product/pages/ProductDetailPage"),
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="details/:id" element={<ProductDetailPage />} />
              <Route path="products" element={<ShopPage />} />
              <Route path="faq" element={<Faq />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
