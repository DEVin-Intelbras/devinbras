import PropTypes from "prop-types";

import { Tabela } from "@components";

export const EspecificacoesTecnicas = ({ especificacoes }) => (
  <Tabela.Conteudo evenLight={true}>
    {especificacoes?.map((esp, index) => (
      <Tabela.Linha key={index}>
        <Tabela.Celula destaque>{esp.title}</Tabela.Celula>
        <Tabela.Celula>{esp.description}</Tabela.Celula>
      </Tabela.Linha>
    ))}
  </Tabela.Conteudo>
);

EspecificacoesTecnicas.propTypes = {
  especificacoes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
