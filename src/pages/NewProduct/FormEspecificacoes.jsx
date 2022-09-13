import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { ButtonOutline, Tabela, Input } from "@components";

import styles from "./NewProduct.module.css";

export function FormEspecificacoes({ form }) {
  const { watch, setValue } = form;
  const lista = watch("especificacoes");

  const { register, getValues, reset } = useForm();

  const handleRemoveSpec = (selIdx) => {
    const filteredSpecs = lista.filter((_, actIdx) => actIdx !== selIdx);
    setValue("especificacoes", [...filteredSpecs]);
  };

  const handleAddSpec = () => {
    setValue("especificacoes", [...lista, getValues("specs")]);
    reset();
  };

  return (
    <>
      <div className={styles.formRow}>
        <Input {...register("specs.titulo")} label="Especificação" placeholder="Informe o título" />
        <Input {...register("specs.descricao")} label="Valor" placeholder="Informe o valor" />
        <div className={styles.button}>
          <ButtonOutline type="button" fullWidth onClick={handleAddSpec}>
            Adicionar
          </ButtonOutline>
        </div>
      </div>

      {lista.length === 0 ? (
        <span className={styles.noSpecs}>Nenhuma especificação cadastrada</span>
      ) : (
        <div className={styles.table}>
          <Tabela.Conteudo onApagarLinha={handleRemoveSpec}>
            {lista.map((spec, index) => (
              <Tabela.Linha key={index}>
                <Tabela.Celula destaque>{spec.titulo}</Tabela.Celula>
                <Tabela.Celula>{spec.descricao}</Tabela.Celula>
              </Tabela.Linha>
            ))}
          </Tabela.Conteudo>
        </div>
      )}
    </>
  );
}

FormEspecificacoes.propTypes = {
  form: PropTypes.object,
};
