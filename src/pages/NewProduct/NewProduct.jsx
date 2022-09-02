import { useForm } from "react-hook-form";
import { ButtonOutline, Tabela, Form, Input, TextArea } from "@components";
import { useState } from "react";
import styles from "./NewProduct.module.css";

export const NewProduct = () => {
  const [specList, setSpecList] = useState([]);

  const { handleSubmit, register, formState, setValue, getValues, resetField } = useForm();
  const handleRemoveSpec = (indx) => {
    setSpecList((pSpecs) => pSpecs.filter((x, indice) => indice !== indx));
  };
  const handleAddSpec = () => {
    const addedSpec = getValues("specs");
    setSpecList((pList) => [...pList, addedSpec]);
    resetField("specs");
  };

  const onSubmitForm = (dados) => {
    setValue("especificacoes", specList);
    //  salvarNovoProduto(dados);
  };

  return (
    <section className={styles.container}>
      <header className={styles.title}>
        <h2>Novo Produto</h2>
      </header>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.formRow}>
          <Input
            register={register}
            formState={formState}
            name="nome"
            label="Nome"
            placeholder="Informe o nome"
          />
          <Input
            register={register}
            formState={formState}
            label="Valor"
            name="valor"
            placeholder="Informe o valor"
          />
        </div>
        <div className={styles.formRow}>
          <Input
            register={register}
            formState={formState}
            label="Url Imagem 1"
            name="url1"
            placeholder="Informe a url da imagem"
          />
          <Input
            register={register}
            formState={formState}
            label="Url Imagem 2"
            name="url2"
            placeholder="Informe a url da imagem"
          />
          <Input
            register={register}
            formState={formState}
            label="Url Imagem 3"
            name="url3"
            placeholder="Informe a url da imagem"
          />
        </div>
        <div className={styles.formRow}>
          <TextArea
            register={register}
            formState={formState}
            label="Descrição"
            name="descricao"
            placeholder="Informe a descrição "
          />
        </div>
        <hr className={styles.divider} />
        <div className={styles.title}>
          <h3>Especificações</h3>
        </div>
        <div className={styles.formRow}>
          <Input
            register={register}
            formState={formState}
            label="Especificação"
            name="specs.titulo"
            placeholder="Informe o título"
          />
          <Input
            register={register}
            formState={formState}
            label="Valor"
            name="specs.descricao"
            placeholder="Informe o valor"
          />
          <div className={styles.button}>
            <ButtonOutline fullWidth onClick={handleAddSpec}>
              Adicionar
            </ButtonOutline>
          </div>
        </div>
        {specList.length === 0 ? (
          <span className={styles.noSpecs}>Nenhuma especificação cadastrada</span>
        ) : (
          <div className={styles.table}>
            <Tabela.Conteudo onApagarLinha={handleRemoveSpec}>
              {specList.map((spec, index) => (
                <Tabela.Linha key={index}>
                  <Tabela.Celula destaque>{spec.titulo}</Tabela.Celula>
                  <Tabela.Celula>{spec.descricao}</Tabela.Celula>
                </Tabela.Linha>
              ))}
            </Tabela.Conteudo>
          </div>
        )}
        <ButtonOutline>Salvar</ButtonOutline>
      </Form>
    </section>
  );
};
