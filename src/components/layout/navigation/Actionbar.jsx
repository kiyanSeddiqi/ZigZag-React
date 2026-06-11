import {
  IoBag,
  IoLogInOutline,
  IoMoonSharp,
  IoPersonCircle,
  IoSearchSharp,
  IoSunnySharp,
} from "react-icons/io5";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../features/auth/context/AuthContext";
import Button from "../../ui/Button";
import useTheme from "../../../hooks/useTheme";

function Actionbar({ onShowSearch, onShowAuth, onShowCart, cartLength }) {
  const { theme, toggleTheme } = useTheme();
  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <>
      {/* ==== MOBILE THEME BTN ==== */}
      <button
        aria-label="دکمه تغییر تم"
        onClick={toggleTheme}
        className="mobile-theme__btn mr-auto lg:hidden w-8 h-8 flex items-center justify-center child:duration-500 text-white cursor-pointer p-1 duration-200 rounded"
      >
        <span className="relative block w-full h-full child:duration-300">
          <IoMoonSharp
            className={`size-6 absolute top-0 ${theme === "dark" ? "opacity-0 invisible rotate-180" : "opacity-100 visible rotate-0 "}`}
          />
          <IoSunnySharp
            className={`size-6 absolute top-0 ${theme === "dark" ? "opacity-100 visible rotate-180" : " opacity-0 invisible rotate-0"}`}
          />
        </span>
      </button>
      <div className="action-bar hidden lg:flex items-center 2xl:gap-x-5 gap-x-4 text-white child:cursor-pointer child:duration-200 child:rounded child:not-last-of-type:hover:bg-slate-600 ">
        {/* ==== THEME BTN ==== */}
        <button
          aria-label="دکمه تغییر تم"
          onClick={toggleTheme}
          className="theme-btn w-8 h-8 flex items-center justify-center child:duration-500 p-1"
        >
          <span className="relative block w-full h-full child:duration-300 ">
            <IoMoonSharp
              className={`size-6 absolute top-0 ${theme === "dark" ? "opacity-0 invisible rotate-90" : "opacity-100 visible rotate-0 "}`}
            />
            <IoSunnySharp
              className={`size-6 absolute top-0 ${theme === "dark" ? "opacity-100 visible rotate-90" : " opacity-0 invisible rotate-0"}`}
            />
          </span>
        </button>
        {/* ==== SEARCH BTN ==== */}
        <button
          aria-label="دکمه جستجو محصولات"
          onClick={() => onShowSearch(true)}
          className="search-btn w-8 h-8 flex items-center justify-center child:duration-500 p-1"
        >
          <IoSearchSharp className="size-6" />
        </button>
        {/* ==== CART BTN ==== */}
        <button
          onClick={() => onShowCart(true)}
          className="relative text-sm p-1"
        >
          <IoBag className="size-6" />
          <span className="absolute -bottom-2 -right-1 p-0.5 rounded-sm size-5 leading-4.5 bg-secondary font-heading font-bold text-primary-dark hover:scale-110 duration-200 border">
            {cartLength}
          </span>
        </button>
        {/* ==== AUTH MODAL BTN ==== */}
        {!currentUser ? (
          <Button
            onClick={() => onShowAuth(true)}
            type="secondary"
            className={"gap-2 h-10 text-sm 2xl:text-base "}
          >
            <>
              <IoLogInOutline className="size-7 " />
              ورود | ثبت نام
            </>
          </Button>
        ) : (
          <Button
            type="secondary"
            onClick={() => {
              logOut();
              toast.info("از حساب کاربری خارج شدید");
            }}
            className="gap-2 h-10 font-open"
          >
            <IoPersonCircle className="size-6" />
            {currentUser.name}
          </Button>
        )}
      </div>
    </>
  );
}

export default Actionbar;
