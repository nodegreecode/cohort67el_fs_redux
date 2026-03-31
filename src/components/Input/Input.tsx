import {InputWrapper, InputLabel, Asterisk, InputComponent, ErrorMessage} from "./styles.ts";
import {type InputProps} from "./types.ts";

function Input({ id, name, type = "text", placeholder, label, disabled = false, error = undefined, value, onChange, isRequired }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>
        {label}
        {isRequired && <Asterisk>*</Asterisk>}
      </InputLabel>
      <InputComponent
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
        value={value}
        onChange={onChange}
      />
      {!!error &&  <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

export default Input;
