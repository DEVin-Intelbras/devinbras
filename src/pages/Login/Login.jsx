import { useForm } from "react-hook-form";

import { ButtonOutline, Form, Input } from "@components";
import { useAutenticacao } from "@contexts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

// michael.nascimento@edu.sc.senai.br

export const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { isAutenticado, handleLogin } = useAutenticacao();

  const handleClickAutenticacao = (dados) => {
    console.log(dados);
    handleLogin(dados);
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
      <Form onSubmit={handleSubmit(handleClickAutenticacao)}>
        <div className={styles.formRow}>
          <Input
            register={register}
            name="usuario"
            label="Usuário"
            placeholder="Informe o usuário"
          />
          <Input register={register} name="senha" label="Senha" placeholder="Informe a senha" />
        </div>
        <div className={styles.button}>
          <ButtonOutline fullWidth>Entrar</ButtonOutline>
        </div>
      </Form>
    </section>
  );
};
