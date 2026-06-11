export function addComma(price) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export function calcPrice(price, discount) {
  const basePrice = addComma(price);
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;
  const displayPrice = addComma(finalPrice.toString());
  return { basePrice, displayPrice, finalPrice, discountAmount };
}
