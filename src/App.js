import React,{ useRef, useState, useEffect } from "react";
import router from "./router";
import { useRoutes } from "react-router-dom";

const App = () => {
  const outlet = useRoutes(router);
  return <div className="App">{outlet}</div>;
};

export default App;
