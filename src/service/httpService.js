const buscar = (url) => {
  return fetch(url, { method: "GET" }).then((res) => {
    return res.json().then((dados) => {
      return {
        totalCount: res.headers.get("X-Total-Count") || 0,
        data: dados,
      };
    });
  });
};

const enviar = (url) => {
  fetch(url, { method: "POST" });
};

export const httpService = {
  enviar,
  buscar,
};
