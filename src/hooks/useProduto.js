import { useEffect, useState } from "react";

import { statusType } from "@utils";
import { produtoService } from "@service";

export const useProduto = ({ id }) => {
  const [produto, setProduto] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);

  useEffect(() => {
    setStatus(statusType.isLoading);

    produtoService
      .buscarProdutoPorId(id)
      .then(({ data }) => {
        setProduto(data);
        setStatus(statusType.isComplete);
      })
      .catch((err) => {
        console.error(err);
        setStatus(statusType.isError);
      });
  }, [id]);

  return { produto, status };
};
