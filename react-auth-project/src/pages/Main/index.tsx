import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AuthBox from "../../components/AuthBox";
import AuthInputBox from "../../components/AuthInputBox";
import AuthButton from "../../components/AuthButton";
import AuthButtonList from "../../components/AuthButtonList";

const Main = () => {
  return (
    <section>
      <h1>HELLO</h1>
      <AuthBox>
        <AuthInputBox
          placeholder={"Email or username"}
          errorMessage={"This email or username is not available."}
        />
        <AuthInputBox
          placeholder={"password"}
          errorMessage={"This password is not available."}
        />
        <AuthButton title={`로그인`} />
        <AuthButtonList>
          <li>
            <Link to="/join">회원가입</Link>
          </li>
        </AuthButtonList>
      </AuthBox>
    </section>
  );
};

export default Main;
