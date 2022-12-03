import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginBox = styled.div`
  display: flex;
  padding: 20px;
  width: 460px;
  box-sizing: border-box;
  //   border: 1px solid #d1d5db;
  box-shadow: 10px 10px 30px #e4e4e7;
  border-radius: 4px;
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
  & > button {
    margin-top: 20px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #6667ab;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
  }

  & > ul {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
  }
`;

const Main = () => {
  return (
    <MainComponent>
      <h1>HELLO</h1>
      <LoginBox>
        <input placeholder={"Email"} />
        <input placeholder={"password"} />
        <button>로그인</button>
        <ul>
          <li>
            <Link to="/">회원가입</Link>
          </li>
        </ul>
      </LoginBox>
    </MainComponent>
  );
};

export default Main;
