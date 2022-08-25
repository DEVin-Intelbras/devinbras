import PropTypes from "prop-types";
import { useMatchMedia } from "@hooks";

import styles from "./Formulario.module.css";

const getSizeHelper = (cols) => {
  if (cols <= 0) cols = 1;
  if (cols > 12) cols = 12;
  return `${(100 * cols - 20) / 12}%`;
};

const Container = ({ children }) => (
  <div className={styles.formContainer}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const Titulo = ({ children }) => {
  return (
    <div className={styles.formHeadingContainer}>
      <h2 className={styles.formHeading}>{children}</h2>
    </div>
  );
};

Titulo.propTypes = {
  children: PropTypes.string.isRequired,
};

const Conteudo = ({ children }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.formContent}>
      {children}
    </form>
  );
};

Conteudo.propTypes = {
  children: PropTypes.string.isRequired,
};

const Input = ({ id, label, tamanho = 12, erro, ...otherProps }) => {
  const { isMobile } = useMatchMedia();

  return (
    <label
      htmlFor={id}
      className={`${styles.fieldSet} ${styles.fieldLabel} ${
        !!erro && styles.fieldError
      }`}
      style={{ width: isMobile ? "100%" : getSizeHelper(tamanho) }}
    >
      {label}
      <input
        {...otherProps}
        id={id}
        className={`${styles.formInput} ${!!erro && styles.fieldError}`}
      />
      {!!erro && <span>{erro}</span>}
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tamanho: PropTypes.number,
  erro: PropTypes.string,
  otherProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
  }),
};

const TextArea = ({ id, label, value, erro, ...otherProps }) => {
  const { isMobile } = useMatchMedia();

  return (
    <label
      htmlFor={id}
      className={`${styles.fieldSet} ${styles.fieldLabel} ${
        !!erro && styles.fieldError
      }`}
      style={{ width: isMobile ? "100%" : getSizeHelper(12) }}
    >
      {label}
      <textarea
        rows={5}
        {...otherProps}
        id={id}
        className={`${styles.textAreaInput} ${!!erro && styles.fieldError}`}
        value={value}
      ></textarea>
      {!!erro && <span>{erro}</span>}
    </label>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  erro: PropTypes.string,
  otherProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

const Componente = ({ children, tamanho = 12 }) => {
  const { isMobile } = useMatchMedia();

  return (
    <div
      className={styles.formGeneric}
      style={{ width: isMobile ? "100%" : getSizeHelper(tamanho) }}
    >
      <div className={styles.formGenericContent}>{children}</div>
    </div>
  );
};

Componente.propTypes = {
  children: PropTypes.node.isRequired,
  tamanho: PropTypes.number,
};

export const Formulario = {
  Container,
  Titulo,
  Conteudo,
  Input,
  TextArea,
  Componente,
};
