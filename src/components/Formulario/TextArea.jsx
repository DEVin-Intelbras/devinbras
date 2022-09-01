import PropTypes from "prop-types";
import styles from "./InputBase.module.css";
import { InputGroup } from "./InputGroup";

const MAX_ROWS = 5;

export const TextArea = (props) => {
  const { name } = props;

  const erro = "";

  return (
    <InputGroup {...props} name={name} erro={erro}>
      <textarea
        className={`${styles.input} ${!!erro && styles.error}`}
        style={{ resize: "none" }}
        rows={MAX_ROWS}
        {...props}
      />
    </InputGroup>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
};
