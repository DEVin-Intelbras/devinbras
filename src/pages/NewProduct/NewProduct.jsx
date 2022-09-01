import { ButtonOutline, Tabela, Form, Input, TextArea } from "@components";
import { useState } from "react";
import styles from "./NewProduct.module.css";

export const NewProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const [specList, setSpecList] = useState([]);

  return (
    <section className={styles.container}>
      <header className={styles.title}>
        <h2>Novo Produto</h2>
      </header>
      <Form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formRow}>
          <Input name="nome" label="Nome" placeholder="Informe o nome" />
          <Input label="Valor" name="valor" placeholder="Informe o valor" />
        </div>
        <div className={styles.formRow}>
          <Input label="Url Imagem 1" name="url1" placeholder="Informe a url da imagem" />
          <Input label="Url Imagem 2" name="url2" placeholder="Informe a url da imagem" />
          <Input label="Url Imagem 3" name="url3" placeholder="Informe a url da imagem" />
        </div>
        <div className={styles.formRow}>
          <TextArea label="Descrição" name="descricao" placeholder="Informe a descrição " />
        </div>
        <hr className={styles.divider} />
        <div className={styles.title}>
          <h3>Especificações</h3>
        </div>
        <div className={styles.formRow}>
          <Input label="Especificação" name="specs.titulo" placeholder="Informe o título" />
          <Input label="Valor" name="specs.valor" placeholder="Informe o valor" />
          <div className={styles.button}>
            <ButtonOutline fullWidth>Adicionar</ButtonOutline>
          </div>
        </div>
        {specList.length === 0 ? (
          <span className={styles.noSpecs}>Nenhuma especificação cadastrada</span>
        ) : (
          <div className={styles.table}>
            <Tabela.Conteudo onApagarLinha={console.log}>
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
