import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAutenticacao } from "@contexts";
import { ButtonOutline, Form, Input } from "@components";

import styles from "./Login.module.css";

const defaultValues = { usuario: "michael.nascimento@edu.sc.senai.br", senha: "123456" };

export const Login = () => {
  const navigate = useNavigate();
  const { isAutenticado, handleLogin } = useAutenticacao();

  const { register, handleSubmit, formState } = useForm({ defaultValues });
  const { errors } = formState;

  const handleClickAutenticacao = (dados) => {
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
            {...register("usuario", { required: "Preenchimento obrigatório" })}
            erro={errors.usuario?.message}
            defaultValue={defaultValues.usuario}
            name="usuario"
            label="Usuário"
            placeholder="Informe o usuário"
          />
          <Input
            {...register("senha", { required: "Preenchimento obrigatório" })}
            erro={errors.senha?.message}
            defaultValue={defaultValues.senha}
            name="senha"
            label="Senha"
            placeholder="Informe a senha"
          />
        </div>
        <div className={styles.button}>
          <ButtonOutline fullWidth>Entrar</ButtonOutline>
        </div>
      </Form>
    </section>
  );
};
