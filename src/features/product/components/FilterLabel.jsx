import { useId } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

function FilterLabel({
  children,
  filterType,
  filterValue,
  onFilterChange,
  filters,
}) {
  const checked = filters[filterType].includes(filterValue);
  const uniqueId = useId();
  return (
    <>
      <label className="flex items-center gap-x-3 text-sm cursor-pointer">
        <input
          name={filterValue}
          id={uniqueId}
          type="checkbox"
          checked={checked}
          aria-checked={checked}
          onChange={() => onFilterChange(filterType, filterValue)}
          className="size-5 border border-brdr-clr rounded-sm transition duration-200 ease-in-out hover:border-primary focus:outline-none focus:ring-0 cursor-pointer sr-only peer"
        />
        <span className="flex items-center justify-center size-5 border border-brdr-clr rounded-sm peer-checked:bg-primary dark:peer-checked:bg-secondary transition-colors duration-200">
          <IoCheckmarkSharp
            className={`
            text-white dark:text-primary-dark text-xl
            transition-all duration-300
            ${checked ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
          />
        </span>
        {children != null ? (
          <span
            className={`${filterType === "prices" ? "font-heading" : ""} inline-flex items-center`}
          >
            {children}
            {filterType === "prices" ? (
              <small className="pr-1">تومان</small>
            ) : (
              ""
            )}
          </span>
        ) : (
          <span>{filterValue}</span>
        )}
      </label>
    </>
  );
}

export default FilterLabel;
