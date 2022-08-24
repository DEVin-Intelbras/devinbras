import { ButtonOutline, Formulario } from "@components";
import styles from "./NewProduct.module.css";

export const NewProduct = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsContent}>
        <Formulario.Container>
          <Formulario.Titulo>Novo Produto</Formulario.Titulo>
          <Formulario.Conteudo>
            <Formulario.Input
              label="Nome"
              placeholder="Informe o nome"
              tamanho={8}
            />
            <Formulario.Input
              label="Valor"
              placeholder="Informe o valor"
              tamanho={4}
            />
            <Formulario.Input
              label="Url Imagem 1"
              placeholder="Informe a url da imagem"
              tamanho={4}
            />
            <Formulario.Input
              label="Url Imagem 2"
              placeholder="Informe a url da imagem"
              tamanho={4}
            />
            <Formulario.Input
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
              tamanho={4}
            />
            <Formulario.TextArea
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
            />
            <Formulario.Input
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
              tamanho={5}
            />
            <Formulario.Input
              label="Url Imagem 3"
              placeholder="Informe a url da imagem"
              tamanho={5}
            />
            <Formulario.Componente tamanho={2}>
              <ButtonOutline fullWidth>Adicionar</ButtonOutline>
            </Formulario.Componente>
          </Formulario.Conteudo>
        </Formulario.Container>
      </div>
    </div>
  );
};
