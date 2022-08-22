import { HttpError } from "./HttpError";

const URL = "http://localhost:8081";

const get = (resource) => {
  return fetch(URL.concat(resource), { method: "GET" }).then(handleResponse).catch(handleError);
};

const post = () => {
  return fetch(URL.concat(resource, data), {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
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
