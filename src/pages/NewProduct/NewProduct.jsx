import { ButtonOutline, Tabela, Form, Input, TextArea } from "@components";
import styles from "./NewProduct.module.css";

export const NewProduct = () => {
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
        <div className={styles.table}>
          <Tabela.Conteudo
            onApagarLinha={(i) => {
              console.log(i);
            }}
          >
            <Tabela.Linha>
              <Tabela.Celula destaque>Frequencia de operação</Tabela.Celula>
              <Tabela.Celula>50/60hz</Tabela.Celula>
            </Tabela.Linha>
            <Tabela.Linha>
              <Tabela.Celula destaque>Altura do produto</Tabela.Celula>
              <Tabela.Celula>12 cm</Tabela.Celula>
            </Tabela.Linha>
          </Tabela.Conteudo>
        </div>
        <ButtonOutline>Salvar</ButtonOutline>
      </Form>
    </section>
  );
};
