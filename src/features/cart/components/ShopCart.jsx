import {
  IoBagRemove,
  IoClose,
  IoShieldCheckmark,
  IoTrash,
} from "react-icons/io5";
import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { optimizedImgs } from "../../../library/imageLoader";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { addComma } from "../../../utils/Helpers";
import { imgSource } from "../../../data/imgSource";
import { AuthContext } from "../../auth/context/AuthContext";
import { toast } from "react-toastify";
import ImageOptimizer from "../../../components/ui/ImageOptimizer";
import Button from "../../../components/ui/Button";
import Backdrop from "../../../components/ui/Backdrop";
import ShopCartItem from "./ShopCartItem";

function ShopCart({ isOpen, onShow }) {
  const { cartData, increaseQty, decreaseQty, removeCartItem, emptyCart } =
    useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const totalPrice = useMemo(
    () => cartData.reduce((acc, cur) => acc + cur.finalPrice * cur.qty, 0),
    [cartData],
  );

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => onShow(false)} />
      <aside
        className={`shopcart-drawer bg-paper text-heading flex flex-col 2xs:w-112.5 w-full fixed top-0 left-0 h-screen z-50 duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* ==== SHOP CART HEADER ==== */}
        <div className="shopcart-header flex items-center justify-between 2xs:px-7 px-4 2xs:h-18 h-16 shrink-0 border-b border-b-brdr-clr">
          <div className="flex items-end gap-x-4">
            <h2 className="lg:text-xl text-lg font-semibold">سبد خرید</h2>

            {cartData.length > 0 && (
              <span className="md:text-base text-sm text-muted font-heading">
                ( {cartData.length} <span className="pr-1">کالا</span>)
              </span>
            )}
          </div>
          <button
            aria-label="بستن سبد خرید"
            className="rounded"
            onClick={() => onShow(false)}
          >
            <IoClose className="size-6 text-primary dark:text-white cursor-pointer " />
          </button>
        </div>
        {/* ==== SHOP CART CONTENT ==== */}
        <ShopCartItem
          cartData={cartData}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          onRemoveItem={removeCartItem}
          onShow={onShow}
        />
        {/* ==== SHOP CART BTN ==== */}
        {cartData.length > 0 && (
          <div className="shopcart-btn 2xs:p-4 p-3 border-t border-t-brdr-clr 2xs:text-lg text-heading flex flex-col 2xs:space-y-5 space-y-3">
            <div className="flex items-center justify-between font-semibold">
              <h3>جمع سبد خرید :</h3>
              <p>
                {addComma(totalPrice)}
                <span className="text-xs pr-1"> تومان</span>
              </p>
            </div>
            <div className="flex items-center 2xs:flex-nowrap flex-wrap 2xs:gap-x-4 gap-x-3 gap-y-3 text-base child:2xs:h-12 child:h-10">
              <Button
                onClick={() => {
                  emptyCart();
                  toast.error("سبد خرید شما خالی شد");
                }}
                type="secondary"
                className={
                  "gap-2 2xs:text-base text-sm shrink-0 2xs:w-auto w-full"
                }
              >
                حذف کل سبد
                <IoBagRemove className="size-5" />
              </Button>
              <Button className={"gap-2 w-full 2xs:text-base text-sm"}>
                ثبت سفارش
              </Button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

export default ShopCart;
