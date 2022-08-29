import { useEffect, useState } from "react";

import { produtoService } from "@service";
import { statusType } from "@utils";

export const useProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);
  const [totalProdutos, setTotalProdutos] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setStatus(statusType.isLoading);
    produtoService
      .buscarProdutos({ category: filtro, page })
      .then(({ data, totalSize }) => {
        setTotalProdutos(totalSize);
        setProdutos((prev) => [...prev, ...data]);
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
    produtos,
    handleFiltrar,
    status,
    filtro,
    totalProdutos,
    handleVerMais,
  };
};
