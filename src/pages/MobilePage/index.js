import React, { useState, startTransition } from "react";
import { SafeArea } from "antd-mobile";
import { Outlet, useNavigate, useRoutes, useLocation } from "react-router-dom";
import "./index.css";
import { MobileWrapper } from "./styled";
import { TabBar } from "antd-mobile";

import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, CompassOutline } from "antd-mobile-icons";

const MobilePage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(pathname);

  const setRouteActive = (value) => {
    startTransition(() => {
      // 在这里执行要进行的状态更新或其他操作
      setActiveKey(value);
      navigate(value);
    });
  };

  const tabs = [
    {
      key: "/mobilepage/home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/mobilepage/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/mobilepage/find",
      title: "发现",
      icon: <CompassOutline />,
    },
    {
      key: "/mobilepage/me",
      title: "我",
      icon: <UserOutline />,
    },
  ];
  return (
    <div>
      <SafeArea position="top" />
      <MobileWrapper>
        <div className="moblie-content">
          <Outlet />
        </div>
        <div className="moblie-tab-bar">
          <TabBar safeArea activeKey={activeKey} onChange={(value) => setRouteActive(value)}>
            {tabs.map((item) => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        </div>
        
      </MobileWrapper>
      <SafeArea position="bottom" />
    </div>
  );
};

export default MobilePage;
