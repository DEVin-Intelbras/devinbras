import { ButtonOutline, Form, Input } from "@components";
import { useAutenticacao } from "@contexts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();

  const { isAutenticado, handleLogin } = useAutenticacao();

  const handleClickAutenticacao = () => {
    handleLogin({ email: "a@a.com", senha: "123" });
  };

  useEffect(() => {
    if (isAutenticado) {
      navigate("/");
    }
  }, [isAutenticado, navigate]);

  return (
    <section className={styles.container}>
      <header className={styles.title}>
        <h2>Login</h2>
      </header>
      <Form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formRow}>
          <Input name="username" label="Usuário" placeholder="Informe o usuário" />
          <Input name="password" label="Senha" placeholder="Informe a senha" />
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
