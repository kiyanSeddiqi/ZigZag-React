const API_URL = import.meta.env.VITE_API_URL;
const TICKET_API = `${API_URL}/tickets`;

export async function createTicket(ticket) {
  const res = await fetch(TICKET_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  if (!res.ok) throw new Error("ثبت پیام شما موفق نبود");

  return await res.json();
}
