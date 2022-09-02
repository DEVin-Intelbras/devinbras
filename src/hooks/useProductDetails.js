import { buscarProduto } from "@service";
import { statusType } from "@utils";
import { useEffect, useState } from "react";

export const useProductDetails = ({ productId }) => {
  const [produto, setProduto] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);

  useEffect(() => {
    setStatus(statusType.isLoading);

    buscarProduto(productId)
      .then((resultado) => {
        setProduto(resultado.data);
        setStatus(statusType.isComplete);
      })
      .catch((err) => {
        console.error(err);
        setStatus(statusType.isError);
      });
  }, [productId]);

  return {
    produto,
    status,
  };
};
