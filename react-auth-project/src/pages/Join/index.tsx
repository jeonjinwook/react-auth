import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AuthBox from "../../components/AuthBox";
import AuthInputBox from "../../components/AuthInputBox";
import AuthButton from "../../components/AuthButton";
import AuthButtonList from "../../components/AuthButtonList";

const Join = () => {
  return (
    <section>
      <h1>JOIN</h1>
      <AuthBox>
        <AuthInputBox
          placeholder={"Email"}
          errorMessage={"This email is not available."}
        />
        <AuthInputBox
          placeholder={"username"}
          errorMessage={"This username is not available."}
        />
        <AuthInputBox
          placeholder={"password"}
          errorMessage={"This password is not available."}
        />
        <AuthInputBox
          placeholder={"password check"}
          errorMessage={"This password check is not available."}
        />
        <AuthButton title={`회원가입`} />
        <AuthButtonList>
          <li>
            <Link to="/">로그인 페이지로 돌아가기</Link>
          </li>
        </AuthButtonList>
      </AuthBox>
    </section>
  );
};

export default Join;
