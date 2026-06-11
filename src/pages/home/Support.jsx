import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ImageOptimizer from "../../components/ui/ImageOptimizer";
import Subscribe from "../../components/ui/Subscribe";
import { bannerImages } from "../../library/bannerLoader";
import Button from "../../components/ui/Button";
import { optimizedImgs } from "../../library/imageLoader";

const supportersData = [
  optimizedImgs.s_4,
  optimizedImgs.s_3,
  optimizedImgs.s_1,
  optimizedImgs.s_5,
  optimizedImgs.s_2,
];

function Support() {
  return (
    <>
      <section className="support my-6 md:my-8 lg:my-12 xl:my-16 2xl:my-20 text-center">
        <div className="max-w-md mx-auto mb-4 md:mb-5 xl:mb-8 2xl:mb-10 3xl:mb-12">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 mb-2 md:mb-3 lg:mb-3.5 text-primary dark:text-white font-bold">
            با مشاورین ما صحبت کنید
          </h3>
          <p className="text-muted text-sm  md:text-base leading-6 md:leading-7 font-semibold">
            سوال یا نیازی به توصیه دارید؟ تمام پشتیبان های ما آماده گفتگوی
            آنلاین هستند.
          </p>
        </div>
        <div className="mb-8 md:px-12 px-5 lg:px-20 xl:px-0 flex items-center justify-center flex-wrap 2xs:gap-0 gap-1">
          {supportersData.map((img, i) => {
            const sizeClasses =
              i === 2
                ? "2xs:w-30 w-24 h-24 2xs:h-30 w-24 h-24 md:w-52 md:h-52 sm:w-40 sm:h-40 z-30"
                : i === 1 || i === 3
                  ? "2xs:w-26 w-24 h-24 2xs:h-26 w-24 h-24 md:w-44 md:h-44 sm:w-32 sm:h-32 z-20"
                  : "2xs:w-18 w-24 h-24 2xs:h-18 w-24 h-24 md:w-36 md:h-36 sm:w-24 sm:h-24 z-10";
            return (
              <div
                className={`${sizeClasses} 2xs:-mx-3 md:-mx-6 transition-all duration-300 ease-in-out 2xs:hover:mx-2 hover:z-50 hover:scale-110 cursor-pointer`}
                key={i}
              >
                <ImageOptimizer
                  image={img}
                  sizes="(max-width: 768px) 200px,250px"
                  alt="تصویر پشتیبان های سایت"
                  className="object-cover w-full h-full aspect-square rounded-full border-4 border-paper shadow-xl"
                />
              </div>
            );
          })}
        </div>
        <Link to="/contact">
          <Button className="gap-2 inline-flex sm:text-base 2xs:text-sm text-xs 2xs:py-3">
            گفتگو با پشتیبانی آنلاین
            <IoChatbubbleEllipsesOutline className="size-5" />
          </Button>
        </Link>
      </section>
      <Subscribe />
    </>
  );
}

export default Support;
