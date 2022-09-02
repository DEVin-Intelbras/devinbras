import PropTypes from "prop-types";
import styles from "./InputBase.module.css";
import { InputGroup } from "./InputGroup";

export const Input = (props) => {
  const { name, register, formState } = props;
  const erro = formState?.errors[name]?.message;

  return (
    <InputGroup {...props} name={name} erro={erro}>
      <input
        className={`${styles.input} ${!!erro && styles.error}`}
        id={name}
        {...register(name)}
      />
    </InputGroup>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  register: PropTypes.string,
  formState: PropTypes.any,
  label: PropTypes.string.isRequired,
};
