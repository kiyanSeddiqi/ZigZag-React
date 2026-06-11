import { Swiper, SwiperSlide } from "swiper/react";
import { bannerImages } from "../../library/bannerLoader";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { heroSliderData } from "../../data/heroSliderData";
import { Link } from "react-router-dom";
import SwiperNavBtn from "../../components/ui/SwiperNavBtn";
import ImageOptimizer from "../../components/ui/ImageOptimizer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "../../components/ui/Button";

function Hero() {
  return (
    <>
      <section className="hero lg:my-8 my-6">
        <div className="hero-slider w-full lg:mt-8 md:mt-6 mt-4 rounded relative ">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={12}
            slidesPerView={1}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            pagination={{ clickable: true }}
            speed={1200}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              300: { spaceBetween: 12 },
              768: { slidesPerView: 1, spaceBetween: 28 },
            }}
            className="size-full rounded"
          >
            {heroSliderData.map((item, i) => {
              const imgSrc = bannerImages[item.imgKey];
              return (
                <SwiperSlide key={i}>
                  <div className="relative">
                    <ImageOptimizer
                      image={imgSrc}
                      alt="بنر محصولات"
                      priority={i === 0}
                      className="rounded w-full object-cover aspect-4/3  sm:aspect-16/8 lg:aspect-16/6 max-h-150"
                      sizes="(max-width: 768px) 100vw,(max-width: 1280px)1200px,(max-width: 1536px) 1777px,2000px"
                    />
                    <div
                      className={`absolute md:text-xl sm:text-base 2xs:text-sm text-xs flex flex-col items-center gap-y-2 sm:child:not-[a]:bg-black/40 child:not-[a]:bg-black/60 child:not-[a]:text-white child:not-[a]:p-1.5 child:not-[a]:rounded-sm ${item.contentClass}`}
                    >
                      <p className="font-semibold text-nowrap">{item.title}</p>
                      {item.subtitle && <p>{item.subtitle}</p>}
                      {item.hasBtn && (
                        <Link
                          to={
                            item.category
                              ? `/products?category=${item.category}`
                              : "/products"
                          }
                          className="bg-primary-dark text-white lg:w-30 sm:w-22 2xs:w-20 w-16 md:py-2 md:px-4 py-1.5 px-3 md:text-base 2xs:text-sm text-xs rounded-sm flex items-center justify-center hover:bg-primary-hover duration-200 font-semibold"
                        >
                          {item.imgKey !== "b_5" ? "خـریـد" : "مشـاهـده"}
                        </Link>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <h1 className="hero-title font-black 2xl:text-4xl xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base text-center lg:mt-8 md:mt-6 mt-4">
          زیگـزاگ، انتخاب خاص پسندها
        </h1>
      </section>
    </>
  );
}

export default Hero;
