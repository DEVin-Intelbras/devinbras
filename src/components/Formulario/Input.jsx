import PropTypes from "prop-types";
import styles from "./InputBase.module.css";
import { InputGroup } from "./InputGroup";

export const Input = (props) => {
  const { name } = props;

  const erro = "";

  return (
    <InputGroup {...props} name={name} erro={erro}>
      <input
        className={`${styles.input} ${!!erro && styles.error}`}
        id={name}
        {...props}
      />
    </InputGroup>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
};
