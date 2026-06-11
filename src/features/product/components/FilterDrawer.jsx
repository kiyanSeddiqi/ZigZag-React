import { IoChevronDown, IoClose, IoTrash } from "react-icons/io5";
import { useState } from "react";
import { colorGroups } from "../../../data/colorGroups";
import { priceRanges } from "../../../data/priceRanges";
import Backdrop from "../../../components/ui/Backdrop";
import ActiveFilters from "./ActiveFilters";
import FilterLabel from "./FilterLabel";
import FilterOptions from "./FilterOptions";

function FilterDrawer({
  isOpen,
  onShow,
  filtersData,
  onFilterChange,
  onRemoveFilters,
  onResetFilter,
  categories,
  brands,
}) {
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => onShow(false)} />
      <aside
        className={`filter-drawer fixed lg:hidden top-0 right-0 z-50 h-screen  2xs:w-80 w-4/5 p-6 text-heading child:border-b child:border-b-brdr-clr child:pb-5 child:not-last-of-type:mb-5 transition-transform duration-300 bg-paper overflow-y-auto font-semibold ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* filter title */}
        <div className="filter-menu__title">
          <div className="flex items-center justify-between mb-3.5">
            <h2 className="text-lg">فیلترها</h2>

            <button
              onClick={() => onShow(!isOpen)}
              className="focus:outline-none cursor-pointer "
            >
              <IoClose className="size-5 text-heading" />
            </button>
          </div>
          {/* filter badges */}
          <ActiveFilters
            filtersData={filtersData}
            onRemoveFilters={onRemoveFilters}
            onResetFilter={onResetFilter}
          />
        </div>
        {/* filter options */}
        <FilterOptions
          filtersData={filtersData}
          onFilterChange={onFilterChange}
          categories={categories}
          brands={brands}
        />
      </aside>
    </>
  );
}

export default FilterDrawer;
