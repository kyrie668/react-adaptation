import React from "react";
import { Tabs } from "antd-mobile";
import styled from "styled-components";
import TodoListItem from "./components/TodoListItem";

const TodoContent = styled.div`
  padding: 10px 5px 5px;
  width: 100%;
`;

const MobileTodo = () => {
  const [activeKey, setActiveKey] = React.useState("家务类");
  return (
    <TodoContent>
      <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={(value) => setActiveKey(value)}>
        <Tabs.Tab title="家务类" key="家务类">
          <TodoListItem
            todoList={["家务1", "家务2", "家务3", "家务4", "家务5", "家务6", "家务7", "家务8", "家务9"]}
          ></TodoListItem>
        </Tabs.Tab>
        <Tabs.Tab title="工作类" key="工作内容">
          <TodoListItem todoList={["工作类1", "工作类2"]}></TodoListItem>
        </Tabs.Tab>
        <Tabs.Tab title="运动类" key="运动类">
          <TodoListItem todoList={["运动类22"]}></TodoListItem>
        </Tabs.Tab>
        <Tabs.Tab title="学习类" key="学习类">
          <TodoListItem todoList={["学习类1", "学习类2", "学习类3", "学习类4", "学习类5"]}></TodoListItem>
        </Tabs.Tab>
        <Tabs.Tab title="测试类型测试类型" key="测试类型测试类型">
          <TodoListItem
            todoList={["测试类型1", "测试类型2", "测试类型3", "测试类型4", "测试类型5", "测试类型6", "测试类型7"]}
          ></TodoListItem>
        </Tabs.Tab>
        <Tabs.Tab title="其他类型" key="其他类型">
          <TodoListItem todoList={["其他1", "其他2", "其他3", "其他4", "其他5", "其他6"]}></TodoListItem>
        </Tabs.Tab>
      </Tabs>
    </TodoContent>
  );
};

export default MobileTodo;
