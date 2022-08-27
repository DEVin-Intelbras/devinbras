import PropTypes from "prop-types";
import { useState } from "react";
import { AutenticacaoContext } from "./AutenticacaoContext";

export const AutenticacaoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = ({ email, senha }) => {
    // TODO: Adicionar chamada a api
    console.log(email, senha);
    setUsuario({ nome: "Thais", email });
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <AutenticacaoContext.Provider
      value={{ isAutenticado: !!usuario, handleLogin, handleLogout }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
};

AutenticacaoProvider.propTypes = {
  children: PropTypes.node,
};
