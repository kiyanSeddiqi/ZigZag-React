import { IoPricetag, IoTicket } from "react-icons/io5";
import ProductCard from "../../features/product/components/ProductCard";
import Timer from "./Timer";

function Sale({ productsData }) {
  const discountEnd = "2026-09-10T23:59:59";

  return (
    <section
      id="sale"
      className="sale mb-12 md:mb-14 xl:mb-16 border border-brdr-clr rounded lg:py-5 py-4 lg:px-4 sm:px-3.5 px-2 text-heading"
    >
      <div className="sale__title flex flex-col 2xs:flex-row items-center justify-between mb-6 gap-y-4">
        <div className="flex items-center gap-x-2 ">
          <IoPricetag className="text-primary sm:size-6 size-5" />
          <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
            فروش ویژه
          </h2>
        </div>
        <Timer endTime={discountEnd} />
      </div>
      <div className="sale__content grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 xl:gap-4">
        {productsData?.map((item) => (
          <ProductCard key={item.id} itemData={item} />
        ))}
      </div>
    </section>
  );
}

export default Sale;
