import { IoMdAdd, IoMdRemove } from "react-icons/io";
import ImageOptimizer from "../../../components/ui/ImageOptimizer";
import { optimizedImgs } from "../../../library/imageLoader";
import { IoShieldCheckmark, IoTrash } from "react-icons/io5";
import { addComma } from "../../../utils/Helpers";
import { imgSource } from "../../../data/imgSource";
import { Link } from "react-router-dom";

function ShopCartItem({
  cartData,
  increaseQty,
  decreaseQty,
  onRemoveItem,
  onShow,
}) {
  return (
    <>
      {cartData.length > 0 ? (
        <div className="shopcart-content 2xs:p-4 px-3 py-4 h-full flex flex-col space-y-3 overflow-y-auto custom-scroll">
          {cartData.map((item, i) => (
            <div
              key={`${item.id}-${item.size}-${item.color.title}`}
              className="flex sm:gap-x-5 gap-x-4 gap-y-3 border-b border-brdr-clr pb-3"
            >
              <div className="image-content flex flex-col space-y-3">
                <ImageOptimizer
                  image={optimizedImgs[item.img]}
                  alt={`تصویر ${item.title}`}
                  className="2xs:size-24 size-20  rounded bg-gray-200 border border-brdr-clr"
                  sizes="(max-width: 480px) 96px ,112px"
                />
                <div className="flex items-center justify-between 2xs:px-2 px-1 rounded border border-brdr-clr 2xs:h-9 h-8 2xs:w-24 w-20 text-paper bg-primary">
                  <button
                    aria-label="دکمه افزودن به موجودی"
                    onClick={() =>
                      increaseQty(item.id, item.size, item.color.title)
                    }
                    className="flex items-center justify-center h-full focus:outline-0 cursor-pointer focus-visible:ring-0"
                  >
                    <IoMdAdd className="size-4" />
                  </button>
                  <span className="flex items-center justify-center h-full font-heading mt-1 2xs:text-base text-sm">
                    {item.qty}
                  </span>
                  {item.qty > 1 ? (
                    <button
                      aria-label="دکمه کاهش موجودی"
                      onClick={() =>
                        decreaseQty(item.id, item.size, item.color.title)
                      }
                      className="flex items-center justify-center h-full cursor-pointer focus-visible:ring-0"
                    >
                      <IoMdRemove className="size-4" />
                    </button>
                  ) : (
                    <button
                      aria-label="دکمه حذف محصول"
                      onClick={() => onRemoveItem(item)}
                      className="flex items-center justify-center h-full cursor-pointer duration-200 focus-visible:ring-0"
                    >
                      <IoTrash className="size-4" />
                    </button>
                  )}
                </div>
              </div>
              <div className="text-content flex flex-col  text-primary w-full h-full font-semibold child:leading-loose">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    to={`details/${item.id}`}
                    onClick={() => onShow(false)}
                    className="focus:outline-0"
                  >
                    <h2 className="2xs:text-base text-sm cursor-pointer line-clamp-1 text-heading 2xs:max-w-62 max-w-46">
                      {item.title}
                    </h2>
                  </Link>
                  {item.qty > 1 && (
                    <button
                      aria-label="دکمه حذف محصول"
                      onClick={() => onRemoveItem(item)}
                      className=" h-full cursor-pointer duration-200 text-error dark:text-heading rounded "
                    >
                      <IoTrash className="2xs:size-5 size-4" />
                    </button>
                  )}
                </div>
                <div className="flex 2xs:flex-nowrap flex-wrap items-center gap-x-2 2xs:text-sm text-xs">
                  <p className="flex items-center gap-x-2">
                    <span className="font-bold">سایز</span>
                    <span className="font-open">{item.size}</span>
                  </p>
                  <span className="text-lg font-open">&bull;</span>
                  <p className="flex items-center gap-x-2">
                    <span className="font-bold">رنگ</span>
                    <span>{item.color.title}</span>
                    <span
                      className={`rounded-full size-4 dark:border dark:border-brdr-clr ${item.color.clr_code}`}
                    ></span>
                  </p>
                </div>
                {item.is_orginal && (
                  <div className="flex items-center gap-x-2 dark:text-secondary 2xs:text-sm text-xs">
                    <IoShieldCheckmark className="size-5" />
                    <p>ضمانت اصالت کالا</p>
                  </div>
                )}
                <div className="flex items-center gap-x-4 flex-wrap gap-y-1 mt-1">
                  <p className="2xs:text-base text-sm">
                    {item.displayPrice}
                    <span className="text-[10px] pr-1">تومان</span>
                  </p>
                </div>
                <p className="2xs:text-base text-sm ">
                  مبلغ کل :
                  <span className="pr-2">
                    {addComma(item.finalPrice * item.qty)}
                  </span>
                  <span className="text-[10px] pr-1">تومان</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 sm:px-7 px-5 h-full">
          <img src={imgSource.empty_cart} alt="سبد خرید خالی" />
          <p className="lg:text-2xl text-lg pt-8 font-semibold">
            سبد خرید خالی است !
          </p>
        </div>
      )}
    </>
  );
}

export default ShopCartItem;
