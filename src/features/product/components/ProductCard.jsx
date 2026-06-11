import {
  IoNotifications,
  IoRocket,
  IoShieldCheckmark,
  IoStar,
} from "react-icons/io5";
import { calcPrice } from "../../../utils/Helpers";
import { useContext, useMemo } from "react";
import { ModalContext } from "../context/ModalContext";
import { optimizedImgs } from "../../../library/imageLoader";
import ImageOptimizer from "../../../components/ui/ImageOptimizer";
import Button from "../../../components/ui/Button";

function ProductCard({ itemData }) {
  const {
    title,
    description,
    images,
    discount,
    price,
    rating,
    id,
    stock,
    is_orginal,
    free_shipping,
    isFeatured,
  } = itemData;

  const { selectHandler } = useContext(ModalContext);

  const { basePrice, displayPrice } = useMemo(() => {
    if (!itemData) return [];
    return calcPrice(price, discount);
  }, [itemData]);

  const isOutOfStock = !stock;
  const isLowStock = stock > 0 && stock < 4;
  const showFreeShipping = stock > 4 && free_shipping;

  const productImg = useMemo(() => optimizedImgs[images[0]], [images]);

  return (
    <div
      onClick={() => stock > 0 && selectHandler(itemData)}
      className="product-card group border border-brdr-clr rounded hover:shadow-md transition-shadow bg-paper cursor-pointer h-full flex flex-col 2xs:w-full w-11/12 mx-auto "
    >
      <div className="image-container overflow-hidden relative md:rounded-b-none rounded md:m-0 m-3 shrink-0 md:w-full sm:w-3/4 2xs:w-11/12 w-3/4 mx-auto flex-1">
        <ImageOptimizer
          image={productImg}
          alt={`تصویر ${title}`}
          className={` duration-200 object-cover w-full h-full rounded md:rounded-b-none bg-gray-200 ${!stock ? "grayscale blur-xs" : "group-hover:scale-105"}`}
          sizes={`${isFeatured ? "(max-width: 640px) 600px,(max-width: 1024px) 950px,(max-width: 1536px) 900px,1000px" : "(max-width: 640px) 180px,(max-width: 1024px) 250px,(max-width: 1536px) 320px,400px"} `}
        />

        {!stock && (
          <span className="bg-error text-body-bg rounded py-1.5 px-3 font-heading xl:text-lg sm:text-base text-sm whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold duration-300 -rotate-30">
            اتمام موجودی
          </span>
        )}
      </div>
      <div className="text-container flex flex-col 2xl:space-y-4 xl:space-y-3 md:space-y-2.5 space-y-2 font-semibold lg:p-3 sm:p-2.5 p-2 ">
        <h3 className="leading-normal  2xl:text-base sm:text-sm text-xs truncate">
          {title}
        </h3>
        <div className="flex items-center justify-between gap-x-2 h-5">
          <div className="flex items-center gap-1">
            {isLowStock && (
              <p className="text-error text-xs">
                تنها
                <span className="px-1 font-heading"> {stock} </span>
                عدد باقی مانده
              </p>
            )}
            {isOutOfStock && <p className="text-error text-xs">موجود نیست</p>}
            {showFreeShipping && (
              <p className="text-primary text-xs flex items-center gap-2">
                <IoRocket className="2xs:size-5 size-4" />
                ارسال سریع زیگزاگ
              </p>
            )}
          </div>
          <div className="font-heading flex items-center gap-1 ">
            <p className="leading-none text-muted mt-1 2xs:text-sm text-xs">
              {rating}
            </p>
            <IoStar className="2xs:size-4 size-3 text-amber-400" />
          </div>
        </div>

        {stock ? (
          <>
            <div className="flex items-center md:gap-x-5 gap-x-3 gap-y-1.5 h-6">
              {discount > 0 && (
                <div className="rounded-xl h-5 w-11 flex items-center justify-center bg-primary text-body-bg text-xs leading-4 gap-x-1 font-open">
                  <span className="">{discount}</span>%
                </div>
              )}
              <p className="mr-auto md:text-base text-sm">
                {displayPrice}
                <span className="text-[10px] pr-1">تومان</span>
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              {is_orginal && (
                <span className="flex items-center dark:text-secondary text-xs gap-1">
                  <IoShieldCheckmark className="2xs:size-5 size-4 text-primary dark:text-secondary" />
                  ضمانت اصالت کالا
                </span>
              )}
              <div className="min-h-6 mr-auto">
                {discount > 0 && (
                  <del className="text-sm text-muted">{basePrice}</del>
                )}
              </div>
            </div>
          </>
        ) : (
          <Button className={"lg:text-base sm:text-sm mt-5"}>
            موجود شد خبر بده
            <IoNotifications className="2xs:size-5 size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
export default ProductCard;
