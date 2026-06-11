import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavBtn from "../../components/ui/SwiperNavBtn";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../../features/product/components/ProductCard";
import { IoSparkles } from "react-icons/io5";

function NewProducts({ productsData }) {
  const canLoop = productsData.length >= 10;

  return (
    <>
      <section
        id="new-products"
        className="new-products mb-12 md:mb-14 xl:mb-16"
      >
        <div className="new-products__title mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <IoSparkles className="text-primary sm:size-6 size-5" />
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-black">
              محصولات جدید
            </h3>
          </div>
          <SwiperNavBtn />
        </div>

        <div className="rounded lg:p-4 md:p-2 sm:p-4 p-2 bg-gray-100 dark:bg-primary ">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={18}
            slidesPerView={4}
            speed={1200}
            navigation={{
              nextEl: ".category-next",
              prevEl: ".category-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={canLoop}
            loopedslides={productsData.length}
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 8 },
              480: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 4 },
              1536: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="rounded"
          >
            {productsData.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard itemData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default NewProducts;
