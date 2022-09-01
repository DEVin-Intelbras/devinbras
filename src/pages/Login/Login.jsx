import { ButtonOutline, Form, Input } from "@components";
import { useAutenticacao } from "@contexts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();

  const { isAutenticado, handleLogin } = useAutenticacao();

  const handleClickAutenticacao = () => {
    handleLogin(login);
  };

  useEffect(() => {
    if (isAutenticado) {
      navigate("/produtos");
    }
  }, [isAutenticado, navigate]);

  return (
    <section className={styles.container}>
      <header className={styles.title}>
        <h2>Login</h2>
      </header>
      <Form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formRow}>
          <Input
            onChange={(e) => setLogin((p) => ({ ...p, usuario: e.target.value }))}
            name="username"
            label="Usuário"
            placeholder="Informe o usuário"
            defaultValue="michael.nascimento@edu.sc.senai.br"
          />
          <Input
            onChange={(e) => setLogin((p) => ({ ...p, senha: e.target.value }))}
            name="password"
            label="Senha"
            placeholder="Informe a senha"
          />
        </div>
        <div className={styles.button}>
          <ButtonOutline fullWidth onClick={handleClickAutenticacao}>
            Entrar
          </ButtonOutline>
        </div>
      </Form>
    </section>
  );
};
