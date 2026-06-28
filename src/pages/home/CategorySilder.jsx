import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { optimizedImgs } from "../../library/imageLoader";
import { categorySliderData } from "../../data/categorySliderData";
import { IoGrid } from "react-icons/io5";
import SwiperNavBtn from "../../components/ui/SwiperNavBtn";
import ImageOptimizer from "../../components/ui/ImageOptimizer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function CategorySlider() {
  return (
    <>
      <section className="category-slider mb-10 md:mb-11 lg:mb-12 xl:mb-14 relative">
        <div className="category-slider__title mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <IoGrid className="text-primary sm:size-6 size-5" />
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
              دسته بندی محصولات
            </h3>
          </div>
          <SwiperNavBtn />
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={6}
          speed={700}
          loop={true}
          navigation={{
            nextEl: ".category-slider .swiper-btn-next",
            prevEl: ".category-slider .swiper-btn-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 4 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 6 },
            1536: { slidesPerView: 7 },
          }}
          className="category-slider__swiper rounded"
        >
          {categorySliderData.map((item, i) => {
            const imgSrc = optimizedImgs[item.imgKey];
            return (
              <SwiperSlide key={`${item.category}-${i}`}>
                <Link
                  to={`/products?category=${item.category}`}
                  className="flex justify-center text-center flex-col focus:outline-0"
                >
                  <div className="inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 relative group border border-brdr-clr rounded">
                    <ImageOptimizer
                      image={imgSrc}
                      sizes="(max-width: 640px) 180px,(max-width: 1024px) 250px,(max-width: 1536px) 320px,400px"
                      alt={`دسته بندی ${item.title}`}
                      className="w-full h-full object-cover rounded"
                    />
                    <span className="absolute inset-0 bg-black/20 group-hover:opacity-100 opacity-0 duration-300 flex items-center justify-center rounded">
                      <FaLink className="size-9 text-white " />
                    </span>
                  </div>
                  <h4 className="text-heading text-sm md:text-base font-bold capitalize">
                    {item.title}
                  </h4>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default CategorySlider;
