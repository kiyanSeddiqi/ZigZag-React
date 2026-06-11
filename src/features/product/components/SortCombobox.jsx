import { useEffect, useState } from "react";
import { IoCode } from "react-icons/io5";

const sortOptions = [
  { key: null, label: "پیش فرض" },
  { key: "latest", label: "جدید ترین" },
  { key: "rating", label: "محبوب ترین" },
  { key: "price-asc", label: "ارزان ترین" },
  { key: "price-desc", label: "گران ترین" },
];

function SortCombobox({ onSortChange }) {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[1]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest(".sort-combobox")) {
        setShowSortMenu(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectSort = (option) => {
    setSelectedSort(option);
    setShowSortMenu(false);
    if (onSortChange) onSortChange(option.key);
  };

  return (
    <>
      <div className="sort-combobox relative text-heading">
        <button
          className="rounded border border-brdr-clr py-2 px-4 sm:text-base text-sm flex items-center gap-x-2 cursor-pointer sm:w-40 w-35 size-full focus:outline-0 bg-paper"
          onClick={() => setShowSortMenu(!showSortMenu)}
        >
          <div className="flex items-center flex-1">
            <span className="block leading-normal">{selectedSort.label}</span>
          </div>
          <IoCode className="size-4 rotate-90 text-muted dark:text-gray-100" />
        </button>

        <div
          className={`absolute top-full right-0 w-full bg-paper dark:text-white child:dark:hover:text-primary-dark child:dark:hover:bg-gray-200 rounded shadow my-1 py-1 text-gray-900 child:md:py-2 child:py-1.5 child:md:px-3 child:px-2 sm:text-base text-sm child:cursor-pointer child:duration-200 child:hover:bg-gray-200 border border-brdr-clr z-30 duration-300 ${showSortMenu ? "opacity-100 visible " : "opacity-0 invisible"}`}
        >
          {sortOptions.map((item) => (
            <div
              key={item.key !== null ? item.key : "placeholder"}
              onClick={() => handleSelectSort(item)}
            >
              <span className="block leading-normal">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SortCombobox;
