import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const AuthInputDiv = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    height: 38px;
    padding: 8px 12px;
    box-sizing: border-box;
    margin: 10px 0;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
  }

  & > input::placeholder {
    color: #ccc;
  }

  & > input:focus {
    outline: none;
    border: 1px solid #949494;
  }

  & > p {
    margin: 0;
    color: #dc2626;
    font-size: 12px;
  }

  & > .hidden {
    visibility: hidden;
  }
`;

interface AuthInputBoxProps {
  placeholder?: string;
  validationCheck?: boolean;
  errorMessage?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  type?: string;
  onBlur?: () => void;
  onChange?: () => void;
}

const AuthInputBox = ({
  placeholder,
  validationCheck = false,
  errorMessage,
  value = "",
  setValue = () => {},
  type = "text",
  onBlur = () => {},
  onChange = () => {},
}: AuthInputBoxProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (value.length === 0) {
      setIsError(false);
    } else {
      setIsError(!validationCheck);
    }
  }, [validationCheck]);

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    if (targetValue.length === 0) {
      setIsError(false);
    } else {
      setIsError(!validationCheck);
    }
    onChange();
  };

  return (
    <AuthInputDiv>
      <input
        placeholder={placeholder}
        onChange={onChangeHandle}
        onBlur={onBlur}
        type={type}
      />
      <p className={`${isError ? null : "hidden"} `}>{errorMessage}</p>
    </AuthInputDiv>
  );
};

export default AuthInputBox;
