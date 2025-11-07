export type ApiResult<T> = { data: T | null; error: string | null; status: number };

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

console.log("API_BASE_URL:", API_BASE_URL);

function getDefaultHeaders(token?: string): HeadersInit {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

export async function apiPost<T>(path: string, body: unknown, token?: string): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: getDefaultHeaders(token),
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const status = res.status;
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const payload = isJson ? await res.json() : null;
    if (!res.ok) {
      return { data: null, error: payload?.error || `Request failed (${status})`, status };
    }
    return { data: payload as T, error: null, status };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err.message : "Network error", status: 0 };
  }
}

export async function apiGet<T>(path: string, token?: string): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "GET",
      headers: getDefaultHeaders(token),
      cache: "no-store",
    });

    const status = res.status;
    const isJson = res.headers.get("content-type")?.includes("application/json");
    const payload = isJson ? await res.json() : null;
    if (!res.ok) {
      return { data: null, error: payload?.message || `Request failed (${status})`, status };
    }
    return { data: payload as T, error: null, status };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err.message : "Network error", status: 0 };
  }
}


