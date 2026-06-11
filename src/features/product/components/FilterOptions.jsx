import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import FilterLabel from "./FilterLabel";
import { priceRanges } from "../../../data/priceRanges";
import { colorGroups } from "../../../data/colorGroups";

export const CATEGORY_MAP = {
  men: "آقایان",
  women: "بانوان",
  kids: "کودکان",
  shoes: "کفش",
  bags: "کوله پشتی",
  gloves: "دستکش",
};

function FilterOptions({ filtersData, onFilterChange, categories, brands }) {
  const [openCategory, setOpenCategory] = useState(true);
  const [openBrands, setOpenBrands] = useState(false);
  const [openPriceRange, setOpenPriceRange] = useState(false);
  const [openColors, setOpenColors] = useState(false);

  return (
    <>
      <div className="filter-menu__category">
        <div
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3 className="text-heading">دسته بندی</h3>
          <IoChevronDown
            className={`size-5 text-muted duration-300 ${openCategory ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <div
          className={`grid overflow-hidden duration-300 transition-all ease-in-out ${openCategory ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div
            className={`flex flex-col space-y-4 duration-300 min-h-0 ${openCategory ? "mt-6" : "mt-0"}`}
          >
            {categories.map((cat) => (
              <FilterLabel
                key={cat}
                filterType={"categories"}
                filterValue={cat}
                onFilterChange={onFilterChange}
                filters={filtersData}
              >
                {CATEGORY_MAP[cat] || cat}
              </FilterLabel>
            ))}
          </div>
        </div>
      </div>
      <div className="filter-menu__brand">
        <div
          onClick={() => setOpenBrands(!openBrands)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3 className="text-heading">برند ها</h3>
          <IoChevronDown
            className={`size-5 text-muted duration-300 ${openBrands ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <div
          className={`grid overflow-y-auto custom-scroll duration-300 transition-all ease-in-out ${openBrands ? "grid-rows-[1fr] opacity-100 max-h-60 mt-6" : "grid-rows-[0fr] opacity-0 max-h-0 mt-0"}`}
        >
          <div
            className={`flex flex-col space-y-4 duration-300 min-h-0 ${openCategory ? "" : ""}`}
          >
            {brands.map((brand) => (
              <FilterLabel
                key={brand}
                filterType={"brands"}
                filterValue={brand}
                onFilterChange={onFilterChange}
                filters={filtersData}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="filter-menu__price">
        <div
          onClick={() => setOpenPriceRange(!openPriceRange)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3 className=" text-heading">محدوده قیمت</h3>
          <IoChevronDown
            className={`size-5 text-muted duration-300 ${openPriceRange ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <div
          className={`grid overflow-hidden duration-300 transition-all ease-in-out ${openPriceRange ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div
            className={`flex flex-col space-y-4 duration-300 min-h-0 ${openPriceRange ? "mt-6" : "mt-0"}`}
          >
            {priceRanges.map((range, i) => (
              <FilterLabel
                key={i}
                filterType={"prices"}
                filterValue={range}
                onFilterChange={onFilterChange}
                filters={filtersData}
              >
                {range.label}
              </FilterLabel>
            ))}
          </div>
        </div>
      </div>
      <div className="filter-menu__color">
        <div
          onClick={() => setOpenColors(!openColors)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3 className=" text-heading">رنگ ها</h3>
          <IoChevronDown
            className={`size-5 text-muted duration-300 ${openColors ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <div
          className={`grid overflow-hidden duration-300 transition-all ease-in-out ${openColors ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div
            className={`flex flex-col space-y-4 duration-300 min-h-0 ${openColors ? "mt-6" : "mt-0"}`}
          >
            {colorGroups.map((color, i) => (
              <FilterLabel
                key={i}
                filterType={"colors"}
                filterValue={color.name}
                onFilterChange={onFilterChange}
                filters={filtersData}
              >
                <span>{color.title}</span>
                <span
                  className={`rounded-full border border-brdr-clr ${color.code} size-5 block mr-2`}
                ></span>
              </FilterLabel>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterOptions;
