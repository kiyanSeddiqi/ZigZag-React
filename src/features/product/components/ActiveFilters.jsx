import { IoClose, IoTrash } from "react-icons/io5";
import { colorGroups } from "../../../data/colorGroups";
import Button from "../../../components/ui/Button";
import { CATEGORY_MAP } from "./FilterOptions";
import { useMemo } from "react";

function ActiveFilters({ filtersData, onRemoveFilters, onResetFilter }) {
  const activeBadges = useMemo(() => {
    return [
      ...filtersData.colors.map((colorName) => {
        const colorObj = colorGroups.find((c) => c.name === colorName);
        return {
          type: "colors",
          value: colorName,
          label: colorObj ? colorObj.title : colorName,
        };
      }),

      ...filtersData.categories.map((cat) => ({
        type: "categories",
        value: cat,
        label: CATEGORY_MAP[cat] || cat,
      })),

      ...filtersData.brands.map((brand) => ({
        type: "brands",
        value: brand,
        label: brand,
      })),

      ...filtersData.prices.map((range) => ({
        type: "prices",
        value: range,
        label: range.label,
      })),
    ];
  });

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {activeBadges.map((badge, i) => {
          return (
            <Button
              key={badge.type + badge.label}
              onClick={() => onRemoveFilters(badge.type, badge.value)}
              className="shrink-0 gap-x-1 py-1.5! px-3! text-sm"
            >
              <span className={badge.type === "prices" ? "font-heading" : ""}>
                {badge.label}
                {badge.type === "prices" && <small className="">تومان</small>}
              </span>
              <IoClose className="size-4 text-paper" />
            </Button>
          );
        })}
      </div>
      {activeBadges.length > 0 && (
        <Button
          onClick={onResetFilter}
          type="secondary"
          className="text-sm mt-4 w-full"
        >
          حذف همه
          <IoTrash className="size-4" />
        </Button>
      )}
    </>
  );
}

export default ActiveFilters;
