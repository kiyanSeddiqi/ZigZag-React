import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { toast } from "react-toastify";

function Subscribe() {
  return (
    <>
      <div className="subscribe flex flex-col justify-between  gap-y-7 rounded-lg lg:p-16 md:py-14 md:px-16 sm:px-8 2xs:py-6 2xs:px-5 p-4 max-w-7xl mx-auto border-2 border-primary bg-transparent relative items-center xl:items-start overflow-x-hidden">
        <div className="subscribe-text font-semibold">
          <h2 className="text-primary sm:text-lg 2xs:text-base text-sm lg:text-2xl md:text-xl xl:mb-4 lg:mb-3 mb-2.5 font-bold">
            نکات کارشناسان را در ایمیل خود دریافت کنید
          </h2>
          <p className="text-muted  md:text-base 2xs:text-sm text-xs ">
            با ثبت ایمیل از جدیدترین تخفیف ها با خبر شوید
          </p>
        </div>
        <div className="subscribe-form md:w-136 sm:w-96 w-full ">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-x-2 flex-col 2xs:flex-row gap-y-2">
              <Input
                name={"email"}
                inputMode={"email"}
                id={"subscribe-email"}
                placeHolder="ایمیل خود را وارد کنید"
                className="tracking-wide w-full "
              />
              <Button className="2xs:w-26 w-full 2xs:text-base text-sm min-h-10">
                عضویت
              </Button>
            </div>
          </form>
        </div>
        <div className="absolute bg-[url('/src/assets/images/others/subscription-bg-reverse.webp')] bg-cover bg-no-repeat hidden xl:block h-full w-full top-0 left-0 -z-10"></div>
      </div>
    </>
  );
}

export default Subscribe;
