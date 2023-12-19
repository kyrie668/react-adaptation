import React from "react";
import { useNavigate } from "react-router";
import { NavBar, Space, Tabs } from "antd-mobile";
import { SearchOutline, MoreOutline, UserOutline } from "antd-mobile-icons";
import styled from "styled-components";

import ReactDND from "@/components/ReactDND";

const SurroundingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  flex-direction: column;
  padding-top: 3.2rem;
  .adm-nav-bar {
    background: rgba(204, 204, 204, 0.7);
    position: fixed;
    top: 0;
    width: 100%;
    height: 2.8rem;
  }
`;

const Friend = () => {
  const navigator = useNavigate();
  const back = () => {
    navigator(-1);
  };

  return (
    <SurroundingWrapper>
      <NavBar onBack={back} ></NavBar>
      <ReactDND></ReactDND>
    </SurroundingWrapper>
  );
};

export default Friend;
