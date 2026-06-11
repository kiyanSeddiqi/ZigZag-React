import { IoClose, IoSearch } from "react-icons/io5";
import Backdrop from "../../../components/ui/Backdrop";
import { useEffect, useId, useMemo, useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import SearchDropdown from "./SearchDropdown";

const API_URL = import.meta.env.VITE_API_URL;

function Search({ isOpen, onShow }) {
  const [searchValue, setSearchValue] = useState("");
  const { data: productsData } = useFetchData(`${API_URL}/products`);

  const filteredProducts = useMemo(() => {
    if (!searchValue.trim()) return [];
    return productsData.filter((p) =>
      p.title
        .toLocaleLowerCase()
        .includes(searchValue.trim().toLocaleLowerCase()),
    );
  }, [searchValue, productsData]);

  function closeHandler() {
    onShow(false);
    setSearchValue("");
  }
  const resultNumber = filteredProducts.length;
  const uniqueId = useId();

  return (
    <>
      <Backdrop onClick={closeHandler} isOpen={isOpen} />
      <div
        className={`search-container fixed top-10 left-1/2 -translate-x-1/2 z-50 px-4 sm:h-16 h-14 duration-400 ${isOpen ? "opacity-100 visible sm:w-lg w-full " : "opacity-0 invisible w-80"}`}
      >
        <div className="search-bar flex items-center rounded-md bg-white text-primary-dark h-full font-semibold">
          <span className="flex items-center justify-center 2xs:w-14 w-10 cursor-pointer ">
            <IoSearch className="2xs:size-6 size-5" />
          </span>
          <input
            type="text"
            id={uniqueId}
            name="search"
            placeholder="نام محصول را وارد کنید ..."
            className="focus:outline-0 ml-auto placeholder:text-primary-dark/70 font-semibold placeholder:text-sm 2xs:text-sm text-xs flex-1 min-w-0"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {resultNumber > 0 && (
            <p className="font-heading text-sm shrink-0">{resultNumber} کالا</p>
          )}
          <button
            onClick={closeHandler}
            className="flex items-center justify-center 2xs:w-14 w-10 cursor-pointer focus-visible:ring-0 "
          >
            <IoClose className="2xs:size-6 size-5" />
          </button>
        </div>
        {/* ===== SEARCH DROPDOWN ===== */}
        {filteredProducts.length > 0 ? (
          <SearchDropdown
            filteredData={filteredProducts}
            onClose={closeHandler}
          />
        ) : searchValue ? (
          <div className="bg-paper mt-3 p-4 rounded-lg">
            <p className="text-error mb-2 ">نتیجهٔ دقیقی پیدا نشد !</p>
            <p className="text-muted">لطفاً نگارش کلمه‌ها را تغییر دهید.</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Search;
