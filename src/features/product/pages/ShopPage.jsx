import { IoHome, IoOptions } from "react-icons/io5";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { useFilter } from "../hook/useFilter";
import { filterProducts } from "../utils/filterProducts";
import { imgSource } from "../../../data/imgSource";
import Container from "../../../components/ui/Container";
import CardSkeleton from "../components/CardSkeleton";
import SortCombobox from "../components/SortCombobox";
import FilterSideBar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";
import sortProducts from "../utils/sortProducts";
import ImageOptimizer from "../../../components/ui/ImageOptimizer";
import Subscribe from "../../../components/ui/Subscribe";
import Button from "../../../components/ui/Button";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import FilterDrawer from "../components/FilterDrawer";

function ShopPage() {
  const { products, isLoading, errorMsg } = useContext(ProductsContext);
  const { filters, handleFilterChange, removeFilters, resetFilters } =
    useFilter();
  const [sortKey, setSortKey] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(16);
  const [showFilter, setShowFilter] = useState(false);

  const handleSort = (key) => setSortKey(key);

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    const filtered = filterProducts(products, filters);
    return sortProducts(filtered, sortKey);
  }, [products, filters, sortKey]);

  const categories = useMemo(() => {
    return [...new Set(products?.map((p) => p.category))];
  }, [products]);

  const brands = useMemo(() => {
    return [...new Set(products?.map((p) => p.brand))];
  }, [products]);

  const visibleProducts = useMemo(() => {
    return sortedProducts.slice(0, visibleCount);
  }, [sortedProducts, visibleCount]);

  function handleShowMore() {
    if (visibleCount >= sortedProducts.length) setVisibleCount(16);
    else setVisibleCount((prev) => prev + 8);
  }

  useEffect(() => {
    setVisibleCount(16);
  }, [filters, sortKey]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [filters]);

  if (isLoading || !products) return <CardSkeleton />;
  if (errorMsg) return <ErrorMessage text={errorMsg} />;
  return (
    <>
      <Container>
        <div className="flex flex-col 2xs:flex-row 2xs:items-center justify-between flex-wrap gap-y-3  sm:py-8 py-5 font-semibold">
          {/* ====== BREAD CRUMB ====== */}
          <div className="breadcrumb hidden lg:block">
            <ol className="flex items-center gap-x-3 child:text-muted">
              <li>
                <Link to="/">
                  <IoHome className="sm:size-5 size-4 hover:text-primary dark:hover:text-white duration-200" />
                </Link>
              </li>
              <li className="pt-1">/</li>
              <li>فروشگاه</li>
            </ol>
          </div>
          {/* ====== MOBILE FILTER BTN ====== */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex lg:hidden items-center gap-2 rounded border border-brdr-clr py-2 px-4 text-heading sm:text-base text-sm focus:outline-0 self-start"
          >
            <IoOptions className="sm:size-5 size-4" />
            تنظیم فیلتر
          </button>
          {/* ===== SORT COMBO BOX ===== */}
          <div className="flex items-center gap-x-3 justify-between ">
            <p className="text-primary sm:text-base text-sm shrink-0">
              مرتب سازی بر اساس :
            </p>
            <SortCombobox onSortChange={handleSort} />
          </div>
        </div>

        <div className="flex items-start pb-8">
          {/* ===== FILTER MENU ===== */}
          <FilterSideBar
            filtersData={filters}
            onFilterChange={handleFilterChange}
            onResetFilter={resetFilters}
            onRemoveFilters={removeFilters}
            categories={categories}
            brands={brands}
          />
          <FilterDrawer
            filtersData={filters}
            onFilterChange={handleFilterChange}
            onResetFilter={resetFilters}
            onRemoveFilters={removeFilters}
            categories={categories}
            brands={brands}
            isOpen={showFilter}
            onShow={setShowFilter}
          />
          {/* ===== PRODUCT'S LIST ===== */}
          {sortedProducts.length !== 0 ? (
            <div className="all-products grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 2xs:w-full w-11/12 mx-auto">
              {visibleProducts.map((item) => (
                <ProductCard itemData={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="text-center py-14 flex flex-col items-center gap-4 w-full font-semibold">
              <img
                src={imgSource.error_img}
                alt="no results"
                className=" opacity-80"
              />
              <h3 className="text-xl text-error">محصولی یافت نشد!</h3>
              <p className="text-muted 2xs:text-base text-sm">
                هیچ آیتمی مطابق فیلترهای انتخابی شما وجود ندارد.
              </p>
              <Button onClick={resetFilters} className="mt-4 ">
                حذف فیلترها
              </Button>
            </div>
          )}
        </div>
        {sortedProducts.length > 16 ? (
          <div className="flex justify-center 2xs:py-12 py-8 2xs:text-base text-sm">
            <Button onClick={handleShowMore} className="">
              {visibleCount >= sortedProducts.length
                ? "نمایش کمتر"
                : "نمایش بیشتر"}
            </Button>
          </div>
        ) : (
          ""
        )}
        <Subscribe />
      </Container>
    </>
  );
}

export default ShopPage;
