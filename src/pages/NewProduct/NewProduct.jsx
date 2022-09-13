import { useForm } from "react-hook-form";
import { ButtonOutline, Form, Input, TextArea } from "@components";
import styles from "./NewProduct.module.css";
import { FormEspecificacoes } from "./FormEspecificacoes";

const defaultValues = { especificacoes: [] };
export const NewProduct = () => {
  const formMethods = useForm({ defaultValues });

  const { handleSubmit, register, formState } = formMethods;
  const { errors } = formState;

  const onSubmitForm = (dados) => {
    console.log(dados);
  };

  return (
    <section className={styles.container}>
      <header className={styles.title}>
        <h2>Novo Produto</h2>
      </header>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.formRow}>
          <Input
            {...register("nome")}
            erro={errors.nome?.message}
            label="Nome"
            placeholder="Informe o nome"
          />
          <Input
            {...register("valor")}
            erro={errors.nome?.message}
            label="Valor"
            placeholder="Informe o valor"
          />
        </div>
        <div className={styles.formRow}>
          <Input
            {...register("url1")}
            erro={errors.url1?.message}
            label="Url Imagem 1"
            placeholder="Informe a url da imagem"
          />
          <Input
            {...register("url2")}
            erro={errors.url2?.message}
            label="Url Imagem 2"
            placeholder="Informe a url da imagem"
          />
          <Input
            {...register("url3")}
            erro={errors.url3?.message}
            label="Url Imagem 3"
            placeholder="Informe a url da imagem"
          />
        </div>
        <div className={styles.formRow}>
          <TextArea
            {...register("descricao")}
            erro={errors.descricao?.message}
            label="Descrição"
            placeholder="Informe a descrição "
          />
        </div>
        <hr className={styles.divider} />
        <div className={styles.title}>
          <h3>Especificações</h3>
        </div>
        <FormEspecificacoes form={formMethods} />
        <ButtonOutline type="submit">Salvar</ButtonOutline>
      </Form>
    </section>
  );
};
