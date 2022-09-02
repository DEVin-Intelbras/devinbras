import { statusType } from "@utils";
import { useEffect, useState } from "react";
import { httpService } from "@service";

const URL = import.meta.env.VITE_BASE_URL_API;

export const useProductDetails = ({ productId }) => {
  const [produto, setProduto] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);

  useEffect(() => {
    setStatus(statusType.isLoading);

    httpService
      .buscar(`${URL}/products/${productId}`)
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
