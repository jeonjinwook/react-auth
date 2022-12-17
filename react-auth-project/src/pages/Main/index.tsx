import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import AuthBox from "../../components/AuthBox";
import AuthInputBox from "../../components/AuthInputBox";
import AuthButton from "../../components/AuthButton";
import AuthButtonList from "../../components/AuthButtonList";

const Main = () => {
  const navigate = useNavigate();

  const userLogoutBtn = () => {
    localStorage.setItem("isLogin", "false");
    navigate("/login");
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") || "false";

    if (isLogin === "false") {
      navigate("/login");
    }
  }, []);

  return (
    <section>
      <h1>HELLO</h1>
      <AuthButton onClick={userLogoutBtn} title={`로그아웃`} />
    </section>
  );
};

export default Main;
