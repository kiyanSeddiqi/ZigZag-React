export function filterProducts(products, filters) {
  let filtered = [...products];

  if (filters.categories.length > 0) {
    filtered = filtered.filter((p) => filters.categories.includes(p.category));
  }

  if (filters.brands.length > 0) {
    filtered = filtered.filter((p) => filters.brands.includes(p.brand));
  }

  if (filters.prices.length > 0) {
    filtered = filtered.filter((product) =>
      filters.prices.some((range) => {
        const { min, max } = range;
        return product.price >= min && product.price < max;
      }),
    );
  }

  if (filters.colors.length > 0) {
    filtered = filtered.filter((product) =>
      product.colors?.some((color) => filters.colors.includes(color.group)),
    );
  }

  return filtered;
}
