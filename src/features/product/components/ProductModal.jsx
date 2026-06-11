import { useContext, useEffect, useMemo, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { calcPrice } from "../../../utils/Helpers";
import { IoChevronBack, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../cart/context/CartContext";
import { toast } from "react-toastify";
import Backdrop from "../../../components/ui/Backdrop";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import QuantitySelector from "./QuantitySelector";
import Button from "../../../components/ui/Button";
import ProductGallery from "./ProductGallery";
import CustomToast from "../../../components/ui/CustomToast";

function ProductModal() {
  const { showModal, setShowModal, productData } = useContext(ModalContext);
  const { addCartItem, cartData, setShowCart } = useContext(CartContext);

  const {
    id,
    title,
    description,
    images,
    price,
    discount,
    colors,
    sizes,
    is_orginal,
    stock,
  } = productData;

  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [productQty, setProductQty] = useState(1);

  const { basePrice, displayPrice, finalPrice } = useMemo(() => {
    if (!productData) return [];
    return calcPrice(price, discount);
  }, [productData]);

  useEffect(() => {
    setSizeValue("");
    setColorValue("");
    setProductQty(1);
  }, [showModal, productData]);

  function submitHandler() {
    if (!sizeValue || !colorValue) {
      if (toast.isActive("warn-toast")) return;
      toast.warning("ابتدا سایز و رنگ کالا را انتخاب کنید", {
        toastId: "warn-toast",
      });
      return;
    }
    const newCart = {
      id,
      title,
      img: images[0],
      displayPrice,
      finalPrice,
      size: sizeValue,
      color: colorValue,
      qty: productQty,
      is_orginal,
      stock,
    };

    addCartItem(newCart);
    toast.success(
      <CustomToast
        toastMsg={"به سبد خرید اضافه شد"}
        onClick={() => {
          (setShowCart(true), setShowModal(false));
        }}
        btnMsg={"مشاهده"}
        Icon={IoChevronBack}
      />,
    );
    // setShowModal(false);
  }

  const isItemInCart = useMemo(
    () =>
      cartData.some(
        (item) =>
          Number(item.id) === Number(id) &&
          item.size === sizeValue &&
          item.color.title === colorValue.title,
      ),
    [cartData, id, sizeValue, colorValue.title],
  );

  function showShopCartHandler() {
    setShowModal(false);
    setShowCart(true);
  }

  return (
    <>
      <Backdrop isOpen={showModal} onClick={() => setShowModal(false)}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`product-modal lg:max-w-225 md:max-w-2xl sm:max-w-lg 2xs:w-4/5 w-full rounded bg-paper duration-300 transition-all z-50 ${showModal ? "scale-100 pointer-events-auto" : "scale-95 pointer-events-none"}`}
        >
          <div className="modal-wrapper lg:h-auto sm:h-122 h-100 overflow-y-auto custom-scroll ">
            <div className="flex flex-col lg:flex-row 2xs:p-4 p-3 gap-x-6 gap-y-3">
              <div className="image-container h-full">
                <ProductGallery
                  key={showModal ? id : "closed"}
                  imgData={images}
                  title={title}
                />
              </div>
              <div className="text-container font-semibold space-y-4">
                <div className="flex flex-col sm:space-y-3 space-y-2">
                  <h2 className=" md:text-lg lg:text-xl 2xs:text-base text-sm max-w-3/4 line-clamp-1">
                    {title}
                  </h2>
                  <p className="lg:text-base sm:text-sm text-xs leading-6 md:leading-7 text-muted sm:max-h-21 max-h-18 line-clamp-2">
                    {description}
                  </p>
                  <div className="flex items-center lg:gap-8 gap-6 ">
                    <p className=" 2xs:text-base text-sm md:text-xl lg:text-2xl">
                      {displayPrice}
                      <span className="text-xs pr-1">تومان</span>
                    </p>
                    <del className="text-muted text-base md:text-xl lg:text-2xl">
                      {basePrice}
                    </del>
                  </div>
                </div>
                <ProductSize
                  sizeData={sizes}
                  sizeValue={sizeValue}
                  onChangeSize={setSizeValue}
                />
                <ProductColor
                  colorData={colors}
                  colorValue={colorValue}
                  onChangeColor={setColorValue}
                />
                <div className="product-modal__btn">
                  <div className="flex 2xs:flex-nowrap flex-wrap items-center mb-3 gap-x-3 sm:gap-x-4 gap-y-3">
                    <QuantitySelector
                      value={productQty}
                      onChange={setProductQty}
                      stockNumber={stock}
                    />
                    <Button
                      onClick={
                        isItemInCart ? showShopCartHandler : submitHandler
                      }
                      className={`w-full sm:h-12 h-10  sm:text-base text-sm ${isItemInCart ? "bg-red-900 hover:bg-red-800 text-white!" : ""}`}
                    >
                      {isItemInCart ? "مشاهده سبد خرید" : " افزودن به سبد خرید"}
                    </Button>
                  </div>
                  <Link
                    to={`details/${id}`}
                    className="focus-visible:outline-none "
                  >
                    <Button
                      onClick={() => setShowModal(false)}
                      type="secondary"
                      className="w-full sm:h-12 h-10 sm:text-base text-sm"
                    >
                      مشاهده جزییات
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ==== CLOSE BTN ==== */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute md:-top-5 md:-left-5 -top-3 -left-3 bg-primary rounded-full size-8 md:size-10 flex items-center justify-center cursor-pointer hover:scale-110 duration-200 border border-brdr-clr z-50"
            >
              <IoCloseSharp className="md:size-6 size-5 text-white dark:text-primary-dark" />
            </button>
          </div>
        </div>
      </Backdrop>
    </>
  );
}

export default ProductModal;
