const API_URL = import.meta.env.VITE_API_URL;
const REVIEWS_API = `${API_URL}/reviews`;

export async function createReview(review) {
  const res = await fetch(REVIEWS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (!res.ok) throw new Error("ثبت نظر شما موفق نبود");

  return await res.json();
}
