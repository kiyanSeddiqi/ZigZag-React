import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState } from "react";
import { Keyboard, Navigation, Thumbs, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { optimizedImgs } from "../../../library/imageLoader";
import ImageOptimizer from "../../../components/ui/ImageOptimizer";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "swiper/css/navigation";

function ProductGallery({ imgData, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const canLoop = imgData?.length >= 3;
  return (
    <>
      <div className="lg:w-84 md:w-70 w-4/6 mx-auto ">
        <div className="relative">
          <Swiper
            modules={[Thumbs, Zoom, Keyboard, Navigation]}
            speed={400}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            zoom={true}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            loop={canLoop}
            loopedslides={imgData?.length}
            className="rounded"
          >
            {/* main image */}
            {imgData?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <ImageOptimizer
                    image={optimizedImgs[img]}
                    alt={`تصویر ${title}`}
                    className="w-full h-full object-cover bg-gray-200 rounded"
                    priority={index === 0}
                    sizes="(max-width: 768px) 300px,(max-width: 1024px) 350px,400px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-btn-next absolute 2xs:left-3 -left-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/60 p-1">
            <IoChevronBack className="lg:size-5 text-primary-dark cursor-pointer" />
          </button>
          <button className="swiper-btn-prev absolute 2xs:right-3 -right-8 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/60 p-1">
            <IoChevronForward className="lg:size-5 text-primary-dark cursor-pointer" />
          </button>
        </div>
        {/* thumbnail images */}
        <div className="mt-3 lg:block hidden">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={3}
          >
            {imgData?.map((img, index) => (
              <SwiperSlide key={index}>
                <ImageOptimizer
                  image={optimizedImgs[img]}
                  alt={`تصویر ${title}`}
                  className="aspect-square cursor-pointer rounded border border-brdr-clr object-cover w-full bg-gray-200"
                  sizes="(max-width: 1536px) 104px,110px"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
