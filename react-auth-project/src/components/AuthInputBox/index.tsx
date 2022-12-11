import React, { useState, useEffect } from "react";
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

const AuthInputBox = ({
  placeholder,
  validationCheck = false,
  errorMessage,
  value = "",
  setValue = () => {},
  type = "text",
  onBlur = () => {},
  onChange = () => {},
}) => {
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (value.length === 0) {
      setIsError(false);
    } else {
      setIsError(!validationCheck);
    }
    console.log("validationCheck", validationCheck);
  }, [validationCheck]);

  const onChangeHandle = (e) => {
    const targetValue = e.target.value;
    console.log(targetValue);
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
