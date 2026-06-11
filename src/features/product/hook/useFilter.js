import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilter() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    prices: [],
    colors: [],
  });

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setFilters((prev) => ({
        ...prev,
        categories: [categoryFromUrl],
      }));
    }
  }, [searchParams]);

  function handleFilterChange(type, value) {
    setFilters((prev) => {
      const current = prev[type];
      const newValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: newValues };
    });
  }

  function removeFilters(type, value) {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((v) => v !== value),
    }));
  }

  function resetFilters() {
    setFilters({
      categories: [],
      brands: [],
      colors: [],
      prices: [],
    });
  }

  return {
    filters,
    handleFilterChange,
    removeFilters,
    resetFilters,
  };
}
