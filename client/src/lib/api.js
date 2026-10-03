export async function api(path, options = {}) {
  const response = await fetch(`/api${path}`, { headers: { "Content-Type": "application/json" }, ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) { const error = new Error(data.message || "Request failed."); error.errors = data.errors; throw error; }
  return data;
}
