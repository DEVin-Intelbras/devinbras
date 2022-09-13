import React from "react";
import PropTypes from "prop-types";

import { InputGroup } from "./InputGroup";

import styles from "./InputBase.module.css";

export const TextArea = React.forwardRef((props, ref) => {
  const { erro } = props;

  return (
    <InputGroup label={props.label} erro={erro}>
      <textarea
        className={`${styles.input} ${!!erro && styles.error}`}
        style={{ resize: "none" }}
        rows={5}
        {...props}
        ref={ref}
      />
    </InputGroup>
  );
});

TextArea.displayName = "Input";

TextArea.propTypes = {
  label: PropTypes.string,
  erro: PropTypes.string,
};
