import { IoTrophy } from "react-icons/io5";
import ProductCard from "../../features/product/components/ProductCard";

function BestSellers({ productsData }) {
  return (
    <>
      <section
        id="best-seller"
        className="best-sellers mb-12 md:mb-14 xl:mb-16"
      >
        <div className="best-sellers__title mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <div className="flex items-center gap-x-2">
            <IoTrophy className="text-primary sm:size-6 size-5" />
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
              پر فروش ترین ها
            </h3>
          </div>
        </div>
        <div className="best-sellers__content grid lg:grid-cols-4 md:grid-cols-3 2xs:grid-cols-2 grid-cols-1 grid-rows-2 gap-3 xl:gap-4">
          {productsData?.map((item) => (
            <div
              className={`${item.isFeatured ? "lg:col-span-2 lg:row-span-2 lg:col-start-2" : " lg:col-span-1"}`}
              key={item.id}
            >
              <ProductCard itemData={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BestSellers;
