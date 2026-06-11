import ImageOptimizer from "../../components/ui/ImageOptimizer";
import { imgSource } from "../../data/imgSource";
import { optimizedImgs } from "../../library/imageLoader";

function DownloadApp() {
  return (
    <>
      <section className="download-app flex flex-col sm:flex-row justify-between  items-center rounded bg-paper pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-4 2xs:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 sm:gap-x-6 gap-x-3 gap-y-5">
        <div className="text-content 2xs:py-4 text-center sm:text-right md:py-6 xl:py-8 text-primary 2xl:max-w-2xl lg:max-w-lg sm:max-w-md w-full">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 mb-2 md:mb-3 lg:mb-3.5 xl:mb-4 font-bold dark:text-secondary">
            اپلیکیشن زیگزاگ
          </h3>
          <p className="mb-6 leading-7 text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:leading-8 md:leading-snug xl:leading-relaxed 2xl:leading-snug md:mb-8 lg:mb-9 xl:mb-12 2xl:mb-14 2xl:w-full font-bold">
            ایده های خود را به اشتراک بگذارید و سریع تر خرید کنید
          </p>
          <div className="flex flex-wrap gap-y-2 justify-center px-6 sm:justify-start gap-x-2 md:gap-x-3 sm:px-0 child:cursor-pointer child:hover:-translate-y-1 child:duration-200 child:rounded">
            <img
              src={imgSource.app_store}
              alt="اپ استور"
              role="button"
              className="w-34 h-full lg:w-44 xl:w-auto"
            />
            <img
              src={imgSource.play_store}
              alt="گوگل پلی"
              role="button"
              className="w-34 h-full lg:w-44 xl:w-auto"
            />
          </div>
        </div>

        <div className="img-content h-full shrink-0">
          <ImageOptimizer
            image={optimizedImgs.app_screen}
            sizes="(max-width: 768px) 400px, 800px"
            alt="تصویر اپلیکیشن زگزاگ"
            className="w-60 md:w-72 lg:w-96 "
          />
        </div>
      </section>
    </>
  );
}

export default DownloadApp;
