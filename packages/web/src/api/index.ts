import { HttpError } from "./HttpError";

type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  error: E;
  data: null;
};

type Result<T, E> = Success<T> | Failure<E>;

export default async function api<T, E = HttpError>(
  url: string,
  method: string = "GET",
  options?: RequestInit
): Promise<Result<T, E>> {
  try {
    const response = await fetch(url, {
      method,
      credentials: "include",
      ...options,
    });
    if (response.ok) {
      return { data: await response.json(), error: null };
    } else {
      return { error: await response.json(), data: null };
    }
  } catch (error) {
    return { error: error as E, data: null };
  }
}
