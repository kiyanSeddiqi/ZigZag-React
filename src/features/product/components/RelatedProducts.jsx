import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavBtn from "../../../components/ui/SwiperNavBtn";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function RelatedProducts({ relatedData }) {
  const canLoop = relatedData?.length >= 5;

  return (
    <>
      <div className="related-products mb-12 md:mb-14 xl:mb-16">
        <div className="related-products__title mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 flex items-center justify-between">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
            محصولات مشابه
          </h3>
          <SwiperNavBtn />
        </div>
        <div className="rounded md:p-4 p-2 bg-gray-100 dark:bg-primary">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={18}
            slidesPerView={4}
            speed={1200}
            navigation={{
              nextEl: ".related-products .swiper-btn-next",
              prevEl: ".related-products .swiper-btn-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={canLoop}
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 8 },
              480: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 4 },
              1536: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="related-products__swiper rounded"
          >
            {relatedData?.map((item, i) => (
              <SwiperSlide key={i}>
                <ProductCard itemData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;
