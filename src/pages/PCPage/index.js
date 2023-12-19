import React, { useState } from "react";
import "./index.css";
import { Button, Form, Select } from "antd";

const { Option } = Select;

const PCPage = () => {
  const arr = [
    { label: "111", value: "111" },
    { label: "222", value: "222" },
    { label: "12211", value: "22" },
    { label: "111", value: "12311" },
  ];
  const [list, setList] = useState(["222", "111"]);

  const oncilck = () => {
    const newList = JSON.parse(JSON.stringify(list));
    let arr=newList.filter((item) => item !== "222");
    console.log('arr11',arr);
    console.log('newList',newList);

    setList(arr);
  };

  return (
    <>
      <Select
        style={{ width: "200px" }}
        mode="multiple"
        value={list}
        onChange={(value) => {
          console.log('111',111);
          setList(value);
        }}
      >
        {arr.map((item, index) => (
          <Option value={item.value} disabled={item.label === "222"} key={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
      <Button onClick={oncilck}>---</Button>
    </>
  );
};

export default PCPage;
