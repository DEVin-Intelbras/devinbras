import { useContext } from "react";

import { AutenticacaoContext } from "./AutenticacaoContext";

export const useAutenticacao = () => {
  const context = useContext(AutenticacaoContext);

  return context;
};
