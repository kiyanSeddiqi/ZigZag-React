import { IoEye } from "react-icons/io5";
import MostVisitedCard from "./MostVisitedCard";

function MostVisited({ productsData }) {
  return (
    <>
      <section
        id="most-visited"
        className="most-visited mb-12 md:mb-14 xl:mb-16"
      >
        <div className="most-visited__title mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <div className="flex items-center gap-x-2">
            <IoEye className="text-primary sm:size-6 size-5" />
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
              پر بازدید ترین ها
            </h3>
          </div>
        </div>
        <div className="most-visited__content grid grid-cols-1 gap-3 xl:gap-4 xl:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2">
          {productsData.map((item) => (
            <MostVisitedCard key={item.id} itemData={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MostVisited;
