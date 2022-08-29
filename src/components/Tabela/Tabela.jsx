import React from "react";
import PropTypes from "prop-types";

import { Lixeira } from "@assets/icons";
import styles from "./Tabela.module.css";

const Conteudo = ({ children, onApagarLinha, evenLight = false }) => {
  return (
    <div className={styles.tableBody}>
      {React.Children.map(children, (child, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <>
            <div
              className={`${styles.tableRow} ${
                isEven && styles[`${evenLight ? "evenRow2" : "evenRow"}`]
              }`}
            >
              {child}
              {onApagarLinha && (
                <div
                  className={styles.dismissable}
                  onClick={() => {
                    onApagarLinha(index);
                  }}
                >
                  <Lixeira />
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

Conteudo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onApagarLinha: PropTypes.func,
  evenLight: PropTypes.bool,
};

const Linha = ({ children }) => <>{children}</>;

Linha.propTypes = {
  children: PropTypes.node.isRequired,
};

const Celula = ({ children, destaque = false }) => (
  <div className={`${styles.tableCell} ${destaque && styles.featuredCell}`}>
    {children}
  </div>
);

Celula.propTypes = {
  children: PropTypes.node.isRequired,
  destaque: PropTypes.bool,
};

export const Tabela = {
  Conteudo,
  Linha,
  Celula,
};
