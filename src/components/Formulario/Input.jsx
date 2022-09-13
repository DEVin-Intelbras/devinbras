import PropTypes from "prop-types";
import React from "react";
import styles from "./InputBase.module.css";
import { InputGroup } from "./InputGroup";

export const Input = React.forwardRef((props, ref) => {
  const { erro } = props;

  return (
    <InputGroup label={props.label} erro={erro}>
      <input ref={ref} className={`${styles.input} ${!!erro && styles.error}`} {...props} />
    </InputGroup>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string,
  erro: PropTypes.string,
};
