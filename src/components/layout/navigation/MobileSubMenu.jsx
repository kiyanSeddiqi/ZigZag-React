import { useState } from "react";
import { IoChevronDown, IoRemove } from "react-icons/io5";
import { Link } from "react-router-dom";

function MobileSubMenu({ menuData, onShowMenu, itemLink }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <>
      {menuData?.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li key={item.id} className="text-sm">
            <button
              onClick={() => toggleOpen(index)}
              className="flex items-center justify-between py-3 pr-8 pl-12 w-full focus-visible:ring-0"
            >
              <span className="flex items-center gap-x-2">
                <span className="w-2 h-px bg-heading"></span>
                {item.title}
              </span>
              <IoChevronDown
                className={`size-4 duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              className={`grid overflow-hidden duration-300 transition-all ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <ul className="min-h-0 ">
                {item?.children?.map((c, i) => {
                  return (
                    <li key={c.id} className=" py-2.5 px-12">
                      <Link to={itemLink} onClick={() => onShowMenu(false)}>
                        {c.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default MobileSubMenu;
