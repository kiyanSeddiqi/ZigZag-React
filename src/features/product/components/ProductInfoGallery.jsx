import ImageOptimizer from "../../../components/ui/ImageOptimizer";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { optimizedImgs } from "../../../library/imageLoader";

function ProductInfoGallery({ imgGallery, stock }) {
  const totalSlides = (imgGallery?.length || 0) + 1;
  const canLoop = totalSlides >= 3;
  return (
    <>
      <div className="prodcut-info__img child-hover:opacity-80 child:duration-200 child:rounded child:overflow-hidden child:bg-gray-200 lg:grid grid-cols-2 gap-2.5 lg:w-1/2 hidden ">
        {imgGallery?.slice(0, 4).map((img, i) => (
          <ImageOptimizer
            key={i}
            image={optimizedImgs[img]}
            alt="تصویر محصول"
            sizes="(max-width: 768px) 250px,(max-width: 1280px) 400px, 500px"
            className={`w-full h-full aspect-square object-cover ${!stock ? "grayscale-100 blur-xs" : ""}`}
          />
        ))}
      </div>
      {/* ===== MOBILE IMAGE SLIDER ===== */}
      <div className="prodcut-info__img-slider lg:hidden block md:w-2/5 w-full mb-7 rounded">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          speed={1200}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={canLoop}
          loopedslides={totalSlides}
          breakpoints={{
            200: { slidesPerView: 1, spaceBetween: 12 },
            360: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 1, spaceBetween: 20 },
          }}
          className="w-full h-full rounded"
        >
          {imgGallery?.map((img, i) => (
            <SwiperSlide key={i}>
              <ImageOptimizer
                image={optimizedImgs[img]}
                alt="product-slider-image"
                className="rounded w-full h-full aspect-square object-cover bg-gray-200"
                sizes="(max-width: 768px) 400px, 800px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductInfoGallery;
