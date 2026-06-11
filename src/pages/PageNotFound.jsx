import { Link } from "react-router-dom";
import { imgSource } from "../data/imgSource";
import { IoHome } from "react-icons/io5";
import Button from "../components/ui/Button";

function PageNotFound() {
  return (
    <>
      <section className="min-h-130 flex items-center justify-center px-4">
        <div className="text-center flex flex-col items-center justify-center max-w-md">
          <img
            src={imgSource.not_found}
            alt="تصویر خطای 404"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
          />
          <h3 className="  md:text-lg lg:text-xl xl:text-2xl leading-relaxed pt-4 md:pt-6 pb-6 md:pb-8 font-semibold">
            صفحه مورد نظر شما پیدا نشد
          </h3>
          <Link to="/">
            <Button className={"gap-2 2xs:text-base text-sm"}>
              <IoHome className="2xs:size-5 size-4" />
              <span className="mt-1">صفحه اصلی</span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
