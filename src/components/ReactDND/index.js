import React, { useState, useEffect } from "react";
import Example from "./example";
import { DndProvider } from "react-dnd";
import { TouchBackend as mobileBackend } from "react-dnd-touch-backend";
import { HTML5Backend as PCBackend } from "react-dnd-html5-backend";

const ReactDND = () => {
  // 用于判断当前设备类型引入对应的backend依赖
  const [isMoblie, setIsMoblie] = useState(true);
  useEffect(() => {}, []);

  return (
    <DndProvider backend={isMoblie ? mobileBackend : PCBackend}>
      <Example />
    </DndProvider>
  );
};

export default ReactDND;
