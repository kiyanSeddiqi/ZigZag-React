import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import Backdrop from "../../ui/Backdrop";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import MobileMenu from "./MobileMenu";

const API_URL = import.meta.env.VITE_API_URL;
const menuURL = `${API_URL}/mega_menu`;

function MobileNav({ isOpen, onShow }) {
  const { data: menuData } = useFetchData(menuURL);
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => onShow(false)} />
      <aside
        className={`mobile-nav fixed lg:hidden top-0 right-0 md:w-100 sm:w-92 bg-paper h-screen z-50 shadow-md duration-300 flex flex-col ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}
      >
        {/* ===== MOBILE-NAV HEADER */}
        <div className=" flex items-center justify-between px-7 2xs:h-18 h-16 border-b border-b-brdr-clr">
          <Logo />
          <button onClick={() => onShow(false)}>
            <IoClose className="2xs:size-6 size-5 text-primary dark:text-white  cursor-pointer " />
          </button>
        </div>
        {/* ===== MOBILE-NAV MENU */}
        <div className="py-5 overflow-y-auto flex-1">
          <MobileMenu itemData={menuData} key={isOpen} onShowMenu={onShow} />
        </div>
        {/* ===== MOBILE-NAV FOOTER */}
        <div className="flex items-center justify-center px-7 border-t border-t-brdr-clr h-16 child:cursor-pointer child:p-5 child:text-primary ">
          <Link to="https://facebook.com">
            <IoLogoFacebook className="size-5" />
          </Link>
          <Link to="https://x.com">
            <IoLogoTwitter className="size-5" />
          </Link>
          <Link to="https://www.youtube.com">
            <IoLogoYoutube className="size-5" />
          </Link>
          <Link to="https://www.instagram.com">
            <IoLogoInstagram className="size-5" />
          </Link>
        </div>
      </aside>
    </>
  );
}

export default MobileNav;
