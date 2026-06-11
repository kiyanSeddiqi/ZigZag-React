import { useMemo } from "react";
import Button from "../../../components/ui/Button";
import { IoNotifications } from "react-icons/io5";
import { calcPrice } from "../../../utils/Helpers";

function ProductInfoPrice({ productData }) {
  const { title, description, price, discount, stock } = productData || [];

  const { basePrice, displayPrice } = useMemo(() => {
    if (!productData) return [];
    return calcPrice(price, discount);
  }, [productData]);

  return (
    <>
      <div className="lg:pb-7 lg:mb-7 pb-5 mb-5 border-b border-b-brdr-clr space-y-3.5 font-semibold">
        <h2 className="md:text-lg lg:text-xl 2xl:text-2xl  text-heading">
          {title}
        </h2>
        <p className="text-sm xl:text-lg lg:text-base 2xs:leading-8 leading-6 text-muted font-semibold">
          {description}
        </p>
        {stock > 0 ? (
          <div className="flex items-center font-heading gap-6">
            <p className="text-base md:text-xl lg:text-2xl">
              {displayPrice}
              <span className="text-xs pr-1">تومان</span>
            </p>
            <del className="text-muted text-base lg:text-xl">
              {discount > 0 && basePrice}
            </del>
          </div>
        ) : (
          <Button className={"2xs:text-base text-sm mt-auto"}>
            موجود شد خبر بده
            <IoNotifications className="2xs:size-5 size-4" />
          </Button>
        )}
      </div>
    </>
  );
}

export default ProductInfoPrice;
