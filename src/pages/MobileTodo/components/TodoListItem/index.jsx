import React, { useRef, useState, useEffect } from "react";
import { Dialog, List, SwipeAction, Toast, Image, Empty, SearchBar, FloatingBubble, Modal, Input } from "antd-mobile";
import styled from "styled-components";
import { useDebounceFn } from "@ant-design/pro-components";
import { AddOutline } from "antd-mobile-icons";

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .search-input {
    margin: 0.5rem 0;
  }
`;

const MiniForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const TodoListItem = ({ todoList = [] }) => {
  const [realList, setRealList] = useState(todoList);
  const [filterList, setFilterList] = useState(todoList);
  const [searchText, setSearchText] = useState("");
  const [addText, setAddText] = useState("");
  const addTextRef = useRef("");

  useEffect(() => {
    if (!todoList.length) {
      return;
    }
    if (searchText) {
      const curList = JSON.parse(JSON.stringify(realList));
      // 过滤列表项
      setFilterList(curList.filter((item) => item.indexOf(searchText) > -1));
      return;
    }
    setFilterList(realList);
  }, [searchText]);

  const onAdd = () => {
    setAddText("");
    addTextRef.current = "";
    Modal.show({
      closeOnAction: true,
      content: (
        <MiniForm>
          <span>新增事项</span>
          <Input
            placeholder="请输入内容"
            onClear={() => {
              setAddText("");
              addTextRef.current = "";
            }}
            clearable
            onChange={(value) => {
              setAddText(value);
              addTextRef.current = value;
            }}
          />
        </MiniForm>
      ),
      actions: [
        {
          key: "add",
          text: "添加",
          primary: true,
          onClick: () => {
            if (addTextRef.current) {
              setRealList([addTextRef.current, ...realList]);
              setFilterList([addTextRef.current, ...filterList]);
              Toast.show({ content: "保存成功", position: "top" });
            }
          },
        },
        {
          key: "cancel",
          text: "取消",
          onClick: () => {},
        },
      ],
    });
  };

  const { run, cancel } = useDebounceFn((value) => {
    // 在这里编写需要进行防抖处理的函数逻辑
    setSearchText(value);
  }, 1000);

  return (
    <TabContent>
      <SearchBar className="search-input" placeholder="请输入内容" showCancelButton onChange={(value) => run(value)} />
      <List>
        {filterList.length ? (
          <>
            {filterList.map((item) => {
              return (
                <SwipeAction
                  rightActions={[
                    {
                      key: "delete",
                      text: "删除",
                      color: "danger",
                      onClick: async () => {
                        await Dialog.confirm({
                          content: "确定要删除吗？",
                        });
                        setFilterList(filterList.filter((i) => i !== item));
                        setRealList(realList.filter((i) => i !== item));
                      },
                    },
                  ]}
                >
                  <List.Item>{item}</List.Item>
                </SwipeAction>
              );
            })}
          </>
        ) : (
          <Empty description="暂无数据" />
        )}
      </List>
      <FloatingBubble
        onClick={onAdd}
        axis="xy"
        magnetic="x"
        style={{
          "--initial-position-bottom": "80px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
        }}
      >
        <AddOutline fontSize={24} />
      </FloatingBubble>
    </TabContent>
  );
};

export default TodoListItem;
