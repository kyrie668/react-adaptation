import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    if (username && password) {
      console.log("username", username);
      console.log("password", password);
    }
    else{
       alert("信息请填写完整")
    }
  };
  const changName = (e) => {
    setUsername(e.target.value);
  }
  const changePsw = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="container">
      <div className="login-wrapper">
        <span style={{color:'#fff',fontSize:'30px',marginBottom:'18px'}}>用户登录</span>
        <div className="form-item-wrapper">
          <span className="form-item-label-name">用户名:</span>
          <input className="form-item-label-input" type="text" onChange={changName} value={username} />
        </div>
        <div className="form-item-wrapper">
          <span className="form-item-label-name">密码:</span>
          <input className="form-item-label-input" type="password" onChange={changePsw} value={password} />
        </div>
        <button className="form-login-btn" onClick={login}>登录</button>
      </div>
    </div>
  );
};

export default Login;
