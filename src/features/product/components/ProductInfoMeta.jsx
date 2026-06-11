import { IoStar } from "react-icons/io5";
import { CATEGORY_MAP } from "./FilterOptions";

function ProductInfoMeta({ productData }) {
  const { brand, rating, category, discount } = productData || [];
  return (
    <>
      <div className=" py-7 border-b border-b-brdr-clr">
        <ul className="grid 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 2xs:grid-cols-2 gap-y-4 gap-x-2 text-heading md:text-lg font-semibold">
          <li>
            برند :<span className="text-muted pr-2">{brand}</span>
          </li>
          <li>
            دسته بندی :
            <span className="text-muted pr-2">{CATEGORY_MAP[category]}</span>
          </li>
          <li>
            درصد تخفیف :
            <span className="text-muted pr-2 font-heading text-base">
              {discount ? `% ${discount} ` : "ندارد"}
            </span>
          </li>
          <li>
            امتیاز کاربران :
            <span className="pr-2 font-heading text-muted text-base">
              {rating}
              <IoStar className=" text-amber-400 size-4 inline mx-0.5 mb-1 mr-2" />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductInfoMeta;
