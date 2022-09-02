import { httpService } from "./httpService";

const URL = import.meta.env.VITE_BASE_URL_API;
const PRODUCTS = "/products";
const LIMIT = 9;

export const buscarProdutos = (pagina, filtro) => {
  const filtroQuery = filtro ? `category=${filtro}&` : "";
  const paginaQuery = `&_sort=name&_page=${pagina}&_limit=${LIMIT}`;
  return httpService.buscar(URL.concat(PRODUCTS, "?", filtroQuery, paginaQuery));
  // http://localhost:8081/products?category=redes&_sort=name&_page=1&_limit=9
};

export const buscarProduto = (produtoId) => {
  return httpService.buscar(`${URL + PRODUCTS}/${produtoId}`);
  // http://localhost:8081/products/10
};
