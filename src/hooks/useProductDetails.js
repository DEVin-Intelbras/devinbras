import { statusType } from "@utils";
import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_BASE_URL_API;

export const useProductDetails = ({ productId }) => {
  const [produto, setProduto] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);

  useEffect(() => {
    setStatus(statusType.isLoading);

    fetch(`${URL}/products/${productId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
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
