import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavBar, Space, Tabs } from "antd-mobile";
import { SearchOutline, MoreOutline, UserOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router";
import Looking from "./components/Looking";

const LookWrapper = styled.div`
  position: relative;
  .adm-nav-bar {
    background: rgba(204, 204, 204, 0.2);
    position: fixed;
    top: 0;
    width: 100%;
    height: 2.8rem;
  }
  .adm-tabs-tab {
    color: rgba(0, 0, 0, 0.65);
    height: 2.8rem;
  }
  .adm-tabs-tab-active {
    color: #000;
  }
 

  .adm-tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    .adm-tabs-header {
      position: fixed;
      top: 0;
    }
    .adm-tabs-content {
      position: absolute;
      top: 2.8rem;
      width: 100%;
      /* overflow:scroll; */
    }
  }
`;

const Look = () => {
  const navigator = useNavigate();
  const right = (
    <div style={{ fontSize: "1.2rem" }}>
      <Space style={{ "--gap": "0.8rem" }}>
        <SearchOutline />
        <UserOutline />
      </Space>
    </div>
  );

  const back = () => {
    navigator(-1);
  };

  return (
    <LookWrapper>
      <NavBar right={right} onBack={back}></NavBar>
      <Tabs style={{ "--active-line-color": "#000" }}>
        <Tabs.Tab title="在看" key="fruits">
          <Looking />
        </Tabs.Tab>
        <Tabs.Tab title="视频" key="vegetables">
          111
        </Tabs.Tab>
        <Tabs.Tab title="热点" key="animals">
          111
        </Tabs.Tab>
      </Tabs>
    </LookWrapper>
  );
};

export default Look;
