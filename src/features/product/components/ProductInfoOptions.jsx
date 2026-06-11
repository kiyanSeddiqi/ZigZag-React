import { IoChevronBack } from "react-icons/io5";
import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../../cart/context/CartContext";
import { calcPrice } from "../../../utils/Helpers";
import { toast } from "react-toastify";
import CustomToast from "../../../components/ui/CustomToast";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import QuantitySelector from "./QuantitySelector";
import Button from "../../../components/ui/Button";

function ProductInfoOptions({ productData }) {
  const {
    sizes,
    colors,
    id,
    stock,
    price,
    discount,
    title,
    images,
    is_orginal,
  } = productData || [];
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [productQty, setProductQty] = useState(1);
  const { addCartItem, cartData, setShowCart } = useContext(CartContext);

  const { discountAmount, finalPrice, displayPrice } = useMemo(() => {
    if (!productData) return [];
    return calcPrice(price, discount);
  }, [productData]);

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
      discountAmount,
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
          setShowCart(true);
        }}
        btnMsg={"مشاهده"}
        Icon={IoChevronBack}
      />,
    );
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

  useEffect(() => {
    setSizeValue("");
    setColorValue("");
    setProductQty(1);
  }, [id]);

  if (!stock) return;
  return (
    <>
      <div className="border-b border-b-brdr-clr">
        <div className="max-w-xl 2xl:max-w-2xl flex lg:flex-col lg:items-start items-center lg:gap-x-10 md:gap-x-4 lg:pb-0 pb-5 flex-wrap lg:gap-y-2 gap-y-7">
          <div className="flex items-center lg:gap-x-18 md:gap-x-4 gap-x-10 flex-wrap lg:gap-y-2 gap-y-5 w-full font-semibold">
            {/* ===== SIZE ===== */}
            <ProductSize
              sizeData={sizes}
              sizeValue={sizeValue}
              onChangeSize={setSizeValue}
            />
            {/* ===== COLOR ===== */}
            <ProductColor
              colorData={colors}
              colorValue={colorValue}
              onChangeColor={setColorValue}
            />
            {/* ===== QTY BTN ===== */}
            <div className="lg:pb-7 w-full sm:self-end">
              <div className="flex 2xs:flex-nowrap flex-wrap items-center  gap-x-3 sm:gap-x-4 gap-y-3 ">
                <QuantitySelector
                  value={productQty}
                  onChange={setProductQty}
                  stockNumber={stock}
                />
                <Button
                  onClick={
                    isItemInCart ? () => setShowCart(true) : submitHandler
                  }
                  className={`w-full sm:h-12 h-10 sm:text-base text-sm ${isItemInCart ? "bg-red-900 hover:bg-red-800 text-white!" : ""}`}
                >
                  {isItemInCart ? "مشاهده سبد خرید" : " افزودن به سبد خرید"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfoOptions;
