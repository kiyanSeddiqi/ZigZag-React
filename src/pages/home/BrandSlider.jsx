import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerImages } from "../../library/bannerLoader";
import { Autoplay, FreeMode } from "swiper/modules";
import { brandSliderData } from "../../data/brandSliderData";
import { optimizedImgs } from "../../library/imageLoader";
import { IoDiamond } from "react-icons/io5";
import ImageOptimizer from "../../components/ui/ImageOptimizer";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

function BrandSlider() {
  return (
    <>
      <section className="brand-slider mb-10 md:mb-11 lg:mb-12 xl:mb-14">
        <div className="category-slider__title mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
          <div className="flex items-center gap-x-2 ">
            <IoDiamond className="text-primary sm:size-6 size-5" />
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
              برند های برتر
            </h3>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={12}
          slidesPerView="auto"
          speed={3000}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            200: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 4 },
            768: { slidesPerView: 5, spaceBetween: 16 },
            1024: { slidesPerView: 6 },
            1536: { slidesPerView: 7 },
          }}
          className="brand-slider__swiper rounded "
        >
          {brandSliderData.map((item, i) => (
            <SwiperSlide key={item}>
              <ImageOptimizer
                image={optimizedImgs[item]}
                sizes="(max-width: 1280px) 195px,200px"
                alt={"لوگوی برند"}
                className="w-full h-full object-cover rounded border border-brdr-clr"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default BrandSlider;
