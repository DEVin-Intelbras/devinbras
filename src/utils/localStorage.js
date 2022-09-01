const TOKEN_STORAGE = "token";

export const obterToken = () => {
  return localStorage.getItem(TOKEN_STORAGE);
};

export const salvarToken = (token) => {
  return localStorage.setItem(TOKEN_STORAGE, token);
};

export const removerToken = () => {
  return localStorage.clear(TOKEN_STORAGE);
};
