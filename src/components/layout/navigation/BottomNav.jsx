import {
  IoBag,
  IoHome,
  IoLogOutOutline,
  IoMenu,
  IoPerson,
  IoSearch,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MobileNav from "./MobileNav";
import { AuthContext } from "../../../features/auth/context/AuthContext";
import { toast } from "react-toastify";

function BottomNav({ onShowSearch, onShowAuth, onShowCart, cartLength }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { currentUser, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="bottom-nav lg:hidden fixed bottom-0 w-full bg-primary-dark text-white h-14 sm:h-16 z-50 px-4 md:px-8 flex items-center 2xs:justify-evenly justify-between child:focus:outline-none child:rounded">
        <button onClick={() => setShowMobileNav(true)}>
          <IoMenu className="sm:size-7 size-6" />
        </button>
        <button onClick={() => onShowSearch(true)}>
          <IoSearch className="sm:size-6 size-5" />
        </button>
        <button>
          <Link to="/" className="flex items-center">
            <IoHome className="sm:size-6 size-5" />
          </Link>
        </button>
        <button onClick={() => onShowCart(true)} className="relative text-sm">
          <IoBag className="sm:size-6 size-5" />
          <span className="absolute -bottom-2 -right-2 p-0.5 rounded-xs size-4 leading-4 bg-secondary font-heading font-bold text-primary-dark hover:scale-110 duration-200">
            {cartLength}
          </span>
        </button>
        {currentUser ? (
          <button
            onClick={() => {
              logOut();
              toast.info("از حساب کاربری خارج شدید");
            }}
            className="flex items-center gap-x-2 "
          >
            <IoLogOutOutline className="sm:size-6 size-5.5" />
            <span className=" sm:max-w-24 sm:block hidden overflow-hidden text-ellipsis mt-1">
              {currentUser.name}
            </span>
          </button>
        ) : (
          <button onClick={() => onShowAuth(true)}>
            <IoPerson className="sm:size-6 size-5" />
          </button>
        )}
      </div>
      <MobileNav isOpen={showMobileNav} onShow={setShowMobileNav} />
    </>
  );
}

export default BottomNav;
