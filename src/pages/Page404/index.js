import React, { startTransition } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  const goHomePage = () => {
    startTransition(() => {
      // 在这里执行要进行的状态更新或其他操作
      navigate("/");
    });
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，所访问的页面不存在"
      extra={
        <Button type="primary" onClick={goHomePage}>
          回到首页
        </Button>
      }
    />
  );
};

export default Page404;
