import React, { useState } from "react";
import "./index.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const register = () => {
    if (username && password && email && phone) {
      console.log("username", username);
      console.log("password", password);
    } else {
      alert("信息请填写完整");
    }
  };
  const changName = (e) => {
    setUsername(e.target.value);
  };
  const changePsw = (e) => {
    setPassword(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="container">
      <div className="login-wrapper">
        <span style={{ color: "#fff", fontSize: "30px",marginBottom:'18px' }}>用户注册</span>
        <div className="form-item-wrapper">
          <span className="form-item-label-name">用户名:</span>
          <input className="form-item-label-input" type="text" onChange={changName} value={username} />
        </div>
        <div className="form-item-wrapper">
          <span className="form-item-label-name">密码:</span>
          <input className="form-item-label-input" type="password" onChange={changePsw} value={password} />
        </div>
        <div className="form-item-wrapper">
          <span className="form-item-label-name">邮箱:</span>
          <input className="form-item-label-input" type="text" onChange={changeEmail} value={email} />
        </div>
        <div className="form-item-wrapper">
          <span className="form-item-label-name">电话:</span>
          <input className="form-item-label-input" type="text" onChange={changePhone} value={phone} />
        </div>
        <button className="form-login-btn" onClick={register}>
          注册
        </button>
      </div>
    </div>
  );
};

export default Register;
