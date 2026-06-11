import { Link } from "react-router-dom";
import ImageOptimizer from "../../components/ui/ImageOptimizer";
import { bannerImages } from "../../library/bannerLoader";

const NestedBannerData = [
  bannerImages.watch_banner,
  bannerImages.trip_banner,
  bannerImages.cardin_banner,
  bannerImages.clothes_banner,
];

function NestedBanners() {
  return (
    <>
      <section className="banner-grid grid grid-cols-2 sm:grid-cols-9 sm:gap-2.5 gap-2 grid-rows-2 mb-12 md:mb-14 xl:mb-16 child:overflow-hidden child:rounded">
        {NestedBannerData.map((item, i) => (
          <div
            key={i}
            className={`${i === 1 || i === 2 ? "sm:col-span-6 col-span-full" : "sm:col-span-3 col-span-1"} ${i === 3 && "col-start-2 row-start-1 sm:col-start-auto sm:row-start-auto"}`}
          >
            <Link to="/products">
              <ImageOptimizer
                image={item}
                sizes="(max-width: 768px) 100vw, 1200px"
                alt="بنر محصولات"
                className="size-full object-cover rounded hover:scale-105 duration-200"
              />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default NestedBanners;
