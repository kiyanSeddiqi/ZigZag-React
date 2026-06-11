import { imgSource } from "../../data/imgSource";

function ErrorMessage({ text }) {
  return (
    <>
      <div className="flex flex-col items-center mt-3 gap-3 justify-center">
        <div className="size-60">
          <img
            src={imgSource.error_img}
            alt="عکس خطا در دریافت نتیجه"
            className="size-full object-contain"
          />
        </div>
        <p className="text-error text-xl font-bold">{text}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-error text-white dark:text-primary-dark rounded cursor-pointer font-semibold"
        >
          تلاش مجدد
        </button>
      </div>
    </>
  );
}

export default ErrorMessage;
