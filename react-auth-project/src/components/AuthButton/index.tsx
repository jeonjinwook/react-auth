import React from "react";
import styled from "styled-components";

const AuthBtn = styled.button`
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #6667ab;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

const AuthButton = ({ title, onClick }) => {
  return <AuthBtn>{title}</AuthBtn>;
};

export default AuthButton;
