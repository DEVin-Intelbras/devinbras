import { ButtonOutline, Formulario, Tabela } from "@components";
import styles from "./NewProduct.module.css";

export const NewProduct = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsContent}>
        <Formulario.Container>
          <Formulario.Titulo>Novo Produto</Formulario.Titulo>
          <Formulario.Conteudo>
            <Formulario.Input
              erro=""
              label="Nome"
              placeholder="Informe o nome"
              tamanho={8}
            />
            <Formulario.Input
              erro=""
              label="Valor"
              placeholder="Informe o valor"
              tamanho={4}
            />
            <Formulario.Input
              erro=""
              label="Url Imagem 1"
              placeholder="Informe a url da imagem"
              tamanho={4}
            />
            <Formulario.Input
              erro=""
              label="Url Imagem 2"
              placeholder="Informe a url da imagem"
              tamanho={4}
            />
            <Formulario.Input
              erro=""
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
              tamanho={4}
            />
            <Formulario.TextArea
              erro=""
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
            />
            <Formulario.Input
              erro=""
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
              tamanho={5}
            />
            <Formulario.Input
              erro=""
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
              tamanho={5}
            />
            <Formulario.Componente tamanho={2}>
              <ButtonOutline fullWidth>Adicionar</ButtonOutline>
            </Formulario.Componente>
            <Formulario.Componente tamanho={12}>
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
            </Formulario.Componente>
          </Formulario.Conteudo>
          <Formulario.Componente tamanho={12}>
            <ButtonOutline>Salvar</ButtonOutline>
          </Formulario.Componente>
        </Formulario.Container>
      </div>
    </div>
  );
};
