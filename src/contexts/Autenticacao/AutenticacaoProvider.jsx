import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { autenticacaoService } from "@service";
import { obterToken, removerToken, salvarToken, statusType } from "@utils";

import { AutenticacaoContext } from "./AutenticacaoContext";

export const AutenticacaoProvider = ({ children }) => {
  const [isAutenticado, setIsAutenticado] = useState(false);
  const [status, setStatus] = useState(statusType.isIdle);

  useEffect(() => {
    const token = obterToken();
    setIsAutenticado(!!token);
  }, []);

  const handleLogin = ({ email, senha }) => {
    setStatus(statusType.isLoading);

    autenticacaoService
      .efetuarLogin({ email, senha })
      .then(({ data }) => {
        salvarToken(data.access_token);
        setIsAutenticado(true);
        setStatus(statusType.isComplete);
      })
      .catch(() => {
        setIsAutenticado(false);
        removerToken();
        setStatus(statusType.isError);
      });
  };

  const handleLogout = () => {
    removerToken();
    setIsAutenticado(false);
  };

  return (
    <AutenticacaoContext.Provider
      value={{ isAutenticado, status, handleLogin, handleLogout }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
};

AutenticacaoProvider.propTypes = {
  children: PropTypes.node,
};
