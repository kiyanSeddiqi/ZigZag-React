import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function SwiperNavBtn({ className }) {
  return (
    <>
      <div
        className={`flex items-center md:gap-x-4 sm:gap-x-3 gap-x-2 ${className} dark:child:bg-primary  child:bg-paper child:text-primary-dark`}
      >
        <button
          aria-label="دکمه اسلاید بعدی"
          className="size-6 2xs:size-8 md:size-9 2xl:size-10 flex items-center justify-center dark:bg-primary hover:bg-primary-dark hover:text-white text-primary-dark duration-300 rounded-full shadow-[0px_0px_5px_#5a5a5a] cursor-pointer category-next"
        >
          <IoChevronForward className=" md:size-5 lg:size-6 2xl:size-7 " />
        </button>
        <button
          aria-label="دکمه اسلاید قبلی"
          className=" size-6 2xs:size-8 md:size-9 2xl:size-10 flex items-center justify-center dark:bg-primary hover:bg-primary-dark hover:text-white text-primary-dark duration-300 rounded-full shadow-[0px_0px_5px_#5a5a5a] cursor-pointer  category-prev"
        >
          <IoChevronBack className=" md:size-5 lg:size-6 2xl:size-7" />
        </button>
      </div>
    </>
  );
}

export default SwiperNavBtn;
