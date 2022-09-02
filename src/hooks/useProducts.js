import { useEffect, useState } from "react";

import { statusType } from "@utils";
import { httpService } from "@service";

const URL = import.meta.env.VITE_BASE_URL_API;
const LIMIT = 9;

export const useProducts = () => {
  const [produtos, setProdutos] = useState([]);
  const [status, setStatus] = useState(statusType.isIdle);
  const [totalProdutos, setTotalProdutos] = useState();
  const [page, setPage] = useState(1);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    setStatus(statusType.isLoading);
    const searchQuery = filtro ? `category=${filtro}&` : "";
    httpService
      .buscar(`${URL}/products?${searchQuery}&_sort=name&_page=${page}&_limit=${LIMIT})`)
      .then((resultado) => {
        setTotalProdutos(resultado.totalCount);
        setProdutos((prev) => [...prev, ...resultado.data]);
        setStatus(statusType.isComplete);
      })
      .catch((err) => {
        console.log(err);
        setStatus(statusType.isError);
      });
  }, [filtro, page]);

  const handleFiltrar = (categoria) => {
    setPage(1);
    setProdutos([]);
    if (filtro === categoria) {
      setFiltro(null);
    } else {
      setFiltro(categoria);
    }
  };

  const handleVerMais = () => {
    setPage((prev) => prev + 1);
  };

  return {
    filtro,
    status,
    produtos,
    totalProdutos,
    handleVerMais,
    handleFiltrar,
  };
};
