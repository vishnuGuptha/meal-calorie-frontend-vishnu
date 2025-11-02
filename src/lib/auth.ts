import { apiPost } from "./api";

export async function login(body: { email: string; password: string }) {
  return apiPost<{ token: string; user?: { firstName?: string; lastName?: string; email: string } }>(
    "/auth/login",
    body
  );
}

export async function register(body: { firstName: string; lastName: string; email: string; password: string }) {
  return apiPost("/auth/register", body);
}


