import { useEffect, useState } from "react";
import { produtoService } from "@service/api/produtos-http-service";

export const statusType = {
  isLoading: "loading",
  isComplete: "complete",
  isError: "error",
  isIdle: "idle",
};

export const useProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);

  useEffect(() => {
    setStatus(statusType.isLoading);
    produtoService
      .buscarProdutos()
      .then((dados) => {
        setProdutos(dados);
        setStatus(statusType.isComplete);
      })
      .catch((err) => {
        console.log(err);
        setStatus(statusType.isError);
      });
  }, []);

  const produtosFiltrados = filtro
    ? produtos.filter((produto) => produto.category === filtro)
    : produtos;

  const handleFiltrar = (categoria) => {
    if (filtro === categoria) {
      setFiltro(null);
    } else {
      setFiltro(categoria);
    }
  };

  return {
    produtos: produtosFiltrados,
    handleFiltrar,
    status,
  };
};
