import { createContext, useContext, useEffect, useRef, useState } from "react";
import CustomToast from "../../../components/ui/CustomToast";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { toast } from "react-toastify";
import { IoMdReturnRight } from "react-icons/io";
import { ProductsContext } from "../../product/context/ProductsContext";

export const CartContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useLocalStorage("cartItem");
  const { updateProductStock, products } = useContext(ProductsContext);

  async function updateStock(productId, amountChange) {
    try {
      const res = await fetch(`${API_URL}/products/${productId}`);

      if (!res.ok) {
        throw new Error("خطا در دریافت محصول از سرور");
      }
      const product = await res.json();
      const newStock = product.stock + amountChange;
      const patchRes = await fetch(`${API_URL}/products/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stock: newStock,
        }),
      });
      if (!patchRes.ok) throw new Error("خطا در به‌روزرسانی موجودی روی سرور");

      if (patchRes.ok) {
        updateProductStock(productId, newStock);
      }
    } catch (err) {
      console.error("updateStock error:", err);
    }
  }

  const addCartItem = async (newItem) => {
    setCartData((prev) => [...prev, newItem]);
    await updateStock(newItem.id, -newItem.qty);
  };

  async function increaseQty(id, size, colorTitle) {
    const res = await fetch(`${API_URL}/products/${id}`);
    const product = await res.json();

    if (product.stock <= 0) {
      toast.warning("محصـول در انبـار موجود نیست", {
        toastId: "cart-toast",
      });
      return;
    }

    setCartData((prev) =>
      prev.map((p) =>
        p.id === id && p.size === size && p.color.title === colorTitle
          ? { ...p, qty: Math.min(p.qty + 1, 10) }
          : p,
      ),
    );

    updateStock(id, -1);
  }

  async function decreaseQty(id, size, colorTitle) {
    setCartData((prev) =>
      prev.map((p) => {
        if (p.id === id && p.size === size && p.color.title === colorTitle) {
          if (p.qty <= 1) return p;
          updateStock(id, 1);
          return { ...p, qty: p.qty - 1 };
        }
        return p;
      }),
    );
  }

  const removeCartItem = (itemData) => {
    const { id, size, color, qty } = itemData;
    setCartData((prev) =>
      prev.filter(
        (p) =>
          !(p.id === id && p.size === size && p.color.title === color.title),
      ),
    );
    toast.error(
      <CustomToast
        toastMsg={"از سبد خرید حذف شد"}
        onClick={() => addCartItem(itemData)}
        btnMsg={"لغو"}
        Icon={IoMdReturnRight}
      />,
    );
    updateStock(id, qty);
  };

  const emptyCart = async () => {
    const items = cartData;

    const grouped = items.reduce((acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + item.qty;
      return acc;
    }, {});

    await Promise.all(
      Object.entries(grouped).map(([id, qty]) => updateStock(id, qty)),
    );

    setCartData([]);
  };

  const contextValue = {
    showCart,
    setShowCart,
    addCartItem,
    cartData,
    increaseQty,
    decreaseQty,
    removeCartItem,
    emptyCart,
  };

  return (
    <>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
