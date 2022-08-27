import { HttpError } from "./HttpError";

const URL = import.meta.env.VITE_BASE_URL_API;

const get = (resource) => {
  return fetch(URL.concat(resource), { method: "GET" })
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource, data) => {
  return fetch(URL.concat(resource), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
};

const handleResponse = (res) => {
  if (res.ok) {
    const data = res
      .json()
      .then((data) => ({
        data,
        totalSize: parseInt(res.headers.get("X-Total-Count")),
      }));
    return data;
  } else {
    throw new HttpError(res.status, "Não foi possível completar a requisição");
  }
};

const handleError = () => {
  throw new HttpError(500, "O servidor está offline");
};

export const httpService = {
  get,
  post,
};
