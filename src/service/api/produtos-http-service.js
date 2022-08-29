import { httpService } from "./http-service";

const PRODUCTS = "/products";
const LIMIT = 9;

const buscarProdutos = ({ category, page = 1 }) => {
  const search = category ? `category=${category}&` : "";

  return httpService.get(`${PRODUCTS}?${search}_sort=name&_page=${page}&_limit=${LIMIT}`);
};

const buscarProdutoPorId = (id) => {
  return httpService.get(`${PRODUCTS}/${id}`);
};

export const produtoService = {
  buscarProdutoPorId,
  buscarProdutos,
};
