import styled from "@emotion/styled";

interface InputComponentProps {
  disabled?: boolean;
  $error?: string | undefined;
}

const generateInputColor = (disabled: boolean | undefined): string => {
  return disabled ? "#e2e1e1" : "";
};

const generateInputBorder = (error: string | undefined) => {
  return error && error.length > 0 ? "red" : "#3f3f3f";
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const Asterisk = styled.span``;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ $error }) => generateInputBorder($error)};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
  background-color: ${({ disabled }) => generateInputColor(disabled)};
`;

export const ErrorMessage = styled.p`
  height: 20px;
  color: #ff6868ff;
`;
