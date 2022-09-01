import { obterToken } from "@utils";

import { HttpError } from "./HttpError";

const URL = import.meta.env.VITE_BASE_URL_API;

const get = (resource) => {
  return fetch(URL.concat(resource), { method: "GET", headers: getHeaders() })
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource, data) => {
  return fetch(URL.concat(resource), {
    method: "POST",
    body: JSON.stringify(data),
    headers: getHeaders(),
  })
    .then(handleResponse)
    .catch(handleError);
};

const handleResponse = (res) => {
  if (res.ok) {
    const data = res.json().then((data) => ({
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

const getHeaders = () => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const token = obterToken();

  return token
    ? { ...defaultHeaders, authorization: `Bearer ${token}` }
    : defaultHeaders;
};

export const httpService = {
  get,
  post,
};
