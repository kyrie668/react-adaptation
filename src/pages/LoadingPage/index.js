import { Spin } from "antd";
import React from "react";

const LoadingPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Spin></Spin>
    </div>
  );
};

export default LoadingPage;
