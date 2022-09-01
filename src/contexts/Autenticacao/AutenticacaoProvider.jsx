import PropTypes from "prop-types";
import { useState } from "react";
import { AutenticacaoContext } from "./AutenticacaoContext";
import { toast } from "react-toastify";

const URL = import.meta.env.VITE_BASE_URL_API;

export const AutenticacaoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = ({ usuario, senha }) => {
    fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: usuario, password: senha }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(new Error("Usuário ou senha inválidos"));
        }
      })
      .then((data) => {
        setUsuario({ nome: data.user.name, token: data.access_token });
      })
      .catch((err) => toast.error(err.message));
    console.log(usuario, senha);
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <AutenticacaoContext.Provider value={{ isAutenticado: !!usuario, handleLogin, handleLogout }}>
      {children}
    </AutenticacaoContext.Provider>
  );
};

AutenticacaoProvider.propTypes = {
  children: PropTypes.node,
};
