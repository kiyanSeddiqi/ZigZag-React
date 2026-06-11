import { useState } from "react";
import { IoChevronDown, IoClose, IoTrash } from "react-icons/io5";
import FilterLabel from "./FilterLabel";
import { priceRanges } from "../../../data/priceRanges";
import { colorGroups } from "../../../data/colorGroups";
import Button from "../../../components/ui/Button";
import ActiveFilters from "./ActiveFilters";
import FilterOptions from "./FilterOptions";

function FilterSideBar({
  filtersData,
  onFilterChange,
  onResetFilter,
  onRemoveFilters,
  brands,
  categories,
}) {
  return (
    <>
      <aside className="filter-menu lg:block lg:sticky lg:top-30 hidden w-52 pl-6 text-primary child:border-b child:border-b-brdr-clr child:pb-5 child:not-last-of-type:mb-5 shrink-0 duration-300 font-semibold">
        <div className="filter-menu__title">
          <h2 className="text-lg text-heading mb-3">فیلترها :</h2>

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

export default FilterSideBar;
