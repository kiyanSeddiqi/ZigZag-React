export default function sortProducts(products, sortKey) {
  if (!products) return [];
  if (sortKey === null) return products;
  let sorted = [...products];

  switch (sortKey) {
    case "latest":
      sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;

    default:
      return products;
  }
  return sorted;
}
