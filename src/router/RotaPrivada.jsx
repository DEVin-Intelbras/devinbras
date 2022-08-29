import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useAutenticacao } from "@contexts";

export const RotaPrivada = ({ children }) => {
  const { isAutenticado } = useAutenticacao();

  return isAutenticado ? children : <Navigate to="/" />;
};

RotaPrivada.propTypes = {
  children: PropTypes.node,
};
