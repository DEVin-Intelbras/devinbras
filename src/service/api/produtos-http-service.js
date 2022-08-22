import { httpService } from "./http-service";

const PRODUCTS = "/products";

const buscarProdutos = () => {
  return httpService.get(PRODUCTS);
};

const buscarProdutoPorId = (id) => {
  return httpService.get(`${PRODUCTS}/${id}`);
};

export const produtoService = {
  buscarProdutoPorId,
  buscarProdutos,
};
