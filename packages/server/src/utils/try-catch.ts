type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  error: E;
  data: null;
};

type Result<T, E> = Success<T> | Failure<E>;

export default async function tryCatch<T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    return { error: error as E, data: null };
  }
}
