import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import AuthBox from "../../components/AuthBox";
import AuthInputBox from "../../components/AuthInputBox";
import AuthButton from "../../components/AuthButton";
import AuthButtonList from "../../components/AuthButtonList";

import { getUserByUsername, getUserByEmail, joinUser } from "../../__users/api";

const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Join = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailCheck, setIsEmailCheck] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [isUsernameCheck, setIsUsernameCheck] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [isPasswordCheck, setIsPasswordCheck] = useState<boolean>(false);
  const [isSecondPasswordCheck, setIsSecondPasswordCheck] =
    useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmail(email);
    setIsEmailCheck(emailReg.test(email));
  }, [email]);

  useEffect(() => {
    setPassword(password);
    setIsPasswordCheck(password.length > 5);
    setIsSecondPasswordCheck(password === secondPassword);
  }, [password]);

  useEffect(() => {
    setSecondPassword(secondPassword);
    setIsSecondPasswordCheck(password === secondPassword && isPasswordCheck);
    setIsPasswordCheck(password.length > 5);
  }, [secondPassword]);

  const duplicateEmailCheck = () => {
    const hasUser = getUserByEmail(email);

    if (isEmailCheck) {
      if (hasUser.length === 0) {
        setIsEmailCheck(true);
      } else {
        setIsEmailCheck(false);
      }
    } else {
      setIsEmailCheck(false);
    }
  };

  const duplicateUsernameCheck = () => {
    const hasUser = getUserByUsername(username);

    if (hasUser.length === 0) {
      setIsUsernameCheck(true);
    } else {
      setIsUsernameCheck(false);
    }
  };

  const joinUserBtn = () => {
    if (
      isEmailCheck &&
      isUsernameCheck &&
      isPasswordCheck &&
      isSecondPasswordCheck
    ) {
      const { status } = joinUser({ email, username, password });

      if (status === "success") {
        alert("회원가입 성공");
        navigate("/");
      } else {
        alert("회원가입에 실패하셨습니다.");
      }
    } else {
      alert("사용자 정보를 다시 확인해주세요");
    }
  };

  return (
    <section>
      <h1>JOIN</h1>
      <AuthBox>
        <AuthInputBox
          value={email}
          setValue={setEmail}
          validationCheck={isEmailCheck}
          onBlur={duplicateEmailCheck}
          placeholder={"Email"}
          errorMessage={"This email is not available."}
        />
        <AuthInputBox
          value={username}
          setValue={setUsername}
          validationCheck={isUsernameCheck}
          onBlur={duplicateUsernameCheck}
          placeholder={"username"}
          errorMessage={"This username is not available."}
        />
        <AuthInputBox
          value={password}
          setValue={setPassword}
          validationCheck={isPasswordCheck}
          type={"password"}
          placeholder={"password"}
          errorMessage={"This password is not available."}
        />
        <AuthInputBox
          value={secondPassword}
          setValue={setSecondPassword}
          validationCheck={isSecondPasswordCheck}
          type={"password"}
          placeholder={"password check"}
          errorMessage={"This password check is not available."}
        />
        <AuthButton title={`회원가입`} onClick={joinUserBtn} />
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
