import { useContext, useMemo } from "react";
import ImageOptimizer from "../../components/ui/ImageOptimizer";
import { calcPrice } from "../../utils/Helpers";
import { IoNotifications, IoRocket, IoShieldCheckmark } from "react-icons/io5";
import { optimizedImgs } from "../../library/imageLoader";
import { ModalContext } from "../../features/product/context/ModalContext";
import Button from "../../components/ui/Button";

function MostVisitedCard({ itemData }) {
  const {
    title,
    images,
    discount,
    price,
    id,
    stock,
    is_orginal,
    free_shipping,
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
    <>
      <div
        className="most-visited__card flex rounded border border-gray-300 dark:border-gray-300/50 hover:shadow-md hover:-translate-y-2 transition cursor-pointer sm:w-full 2xs:w-4/5 w-full mx-auto bg-paper "
        onClick={() => stock > 0 && selectHandler(itemData)}
      >
        <div className="image-container 2xs:flex hidden shrink-0  2xs:w-32 sm:w-26 md:w-34 lg:w-38 bg-gray-200 overflow-hidden  2xs:rounded-l-none rounded h-full">
          <ImageOptimizer
            image={productImg}
            alt={`تصویر ${title}`}
            className={`w-full aspect-square object-cover ${!stock ? "grayscale blur-xs" : "group-hover:scale-105"}`}
            sizes="(max-width: 640px) 120px,(max-width: 1024px) 160px,200px"
          />
        </div>
        <div className="text-container md:p-3 p-2 2xl:p-4 w-full overflow-hidden md:space-y-3 space-y-2 font-semibold">
          <h2 className="truncate text-sm md:text-base">{title}</h2>
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
                <IoRocket className="md:size-5 size-4" />
                ارسال سریع زیگزاگ
              </p>
            )}
          </div>
          {stock ? (
            <div className="flex items-center  md:gap-x-5 gap-x-3  gap-y-1.5 h-7">
              {discount > 0 && (
                <div className="rounded-xl p-1 w-11 flex items-center justify-center bg-primary text-body-bg text-xs leading-4 md:scale-95 scale-85 gap-x-1">
                  <span className="flex mt-px">{discount}</span>%
                </div>
              )}
              <p className="mr-auto md:text-base text-sm">
                {displayPrice}
                <span className="text-[10px] pr-1">تومان</span>
              </p>
            </div>
          ) : (
            <Button className={"2xs:text-sm text-xs w-full"}>
              موجود شد خبر بده
              <IoNotifications className="2xs:size-4" />
            </Button>
          )}
          {stock > 0 && (
            <div className="flex items-center gap-x-2">
              {is_orginal && (
                <span className="flex items-center dark:text-secondary text-xs gap-1">
                  <IoShieldCheckmark className="md:size-5 size-4 text-primary dark:text-secondary" />
                  ضمانت اصالت کالا
                </span>
              )}
              {discount > 0 && (
                <p className="mr-auto md:text-sm text-xs line-through text-muted">
                  {basePrice}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MostVisitedCard;
