import { useRef, useState, useEffect, lazy } from "react";

import { Spin, message } from "antd";
import styled from "styled-components";
import MobilePage from "../MobilePage";
import PcPage from "../PCPage/table";
import ReactDOM from "react-dom";

import { BrowserRouter, Link, Route, Switch, useNavigate, withRouter } from "react-router-dom";

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const MyPage = (props) => {
  let isMobile = useRef(false);
  const [mobile, setMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getCurDevice = () => {
    let ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isChrome = /(?:Chrome|CriOS)/.test(ua),
      isTablet =
        /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet: isTablet,
      isPhone: isPhone,
      isAndroid: isAndroid,
      isPc: isPc,
    };
  };

  const resize = () => {
    setLoading(true);
    const typeObj = getCurDevice();
    if (typeObj.isAndroid || typeObj.isPhone) {
      setMobile(true);
      navigate("/mobilepage");
    } else if (typeObj.isTablet) {
      setMobile(true);
      navigate("/mobilepage");
    } else if (typeObj.isPc) {
      setMobile(false);
      navigate("/pcpage");
    }
    setLoading(false);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <ContainerWrapper>
      <Spin></Spin>
    </ContainerWrapper>
  );
};

export default MyPage;
