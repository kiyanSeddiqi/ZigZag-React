import { useState } from "react";
import {
  IoAppsOutline,
  IoChevronBack,
  IoChevronDown,
  IoEye,
  IoGrid,
  IoPricetag,
  IoRibbon,
  IoSparkles,
  IoTrendingUp,
  IoTrophy,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MobileSubMenu from "./MobileSubMenu";

function MobileMenu({ itemData, onShowMenu }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <>
      <div className="mobile-menu font-semibold">
        <div className="flex items-center gap-x-3 p-3 pb-0">
          <IoGrid className=" 2xs:size-5 size-4 dark:text-secondary text-primary" />
          <h3>دسته بندی</h3>
        </div>
        <ul className="mobile-menu__list font-normal">
          {itemData?.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.id}>
                {item.children ? (
                  <button
                    onClick={() => toggleOpen(index)}
                    className="flex items-center justify-between px-8 py-4 w-full focus-visible:ring-0"
                  >
                    <span className="flex items-center gap-x-2">
                      {item.title}
                    </span>
                    <IoChevronDown
                      className={`size-5 duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => onShowMenu(false)}
                    className="flex px-8 py-4 w-full focus-visible:ring-0"
                  >
                    <Link to="/products">{item.title}</Link>
                  </button>
                )}

                <div
                  className={`grid overflow-hidden duration-300 transition-all ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <ul className="min-h-0">
                    {
                      <MobileSubMenu
                        menuData={item.children}
                        onShowMenu={onShowMenu}
                        itemLink={item.link}
                      />
                    }
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <span className="border-t border-t-brdr-clr flex w-3/4 mx-auto items-center my-2"></span>
        <HashLink
          smooth
          to="/#sale"
          onClick={() => onShowMenu(false)}
          className="flex items-center gap-x-3 py-4 px-3"
        >
          <IoPricetag className=" 2xs:size-5 size-4 dark:text-secondary text-primary" />
          <h3>تخفیف ویژه</h3>
        </HashLink>
        <HashLink
          smooth
          to="/#best-seller"
          onClick={() => onShowMenu(false)}
          className="flex items-center gap-x-3 py-4 px-3"
        >
          <IoTrophy className=" 2xs:size-5 size-4 dark:text-secondary text-primary" />
          <h3>پر فروش ترین ها</h3>
        </HashLink>
        <HashLink
          smooth
          to="/#most-visited"
          onClick={() => onShowMenu(false)}
          className="flex items-center gap-x-3 py-4 px-3"
        >
          <IoEye className=" 2xs:size-5 size-4 dark:text-secondary text-primary" />
          <h3>پر بازدید ترین ها</h3>
        </HashLink>
        <HashLink
          smooth
          to="/#new-products"
          onClick={() => onShowMenu(false)}
          className="flex items-center gap-x-3 py-4 px-3"
        >
          <IoSparkles className=" 2xs:size-5 size-4 dark:text-secondary text-primary" />
          <h3>محصولات جدید</h3>
        </HashLink>
      </div>
    </>
  );
}

export default MobileMenu;
