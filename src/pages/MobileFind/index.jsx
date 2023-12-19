import React, { startTransition } from "react";
import { List } from "antd-mobile";
import { TeamFill, EyeFill, LocationFill } from "antd-mobile-icons";
import styled from "styled-components";
import { useNavigate } from "react-router";

const FriendContent = styled.div`
  width: 100%;
  height: 100%;
  .card-content,
  .adm-list-body-inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .list-header {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
  }
`;

const LIST_MAP = [
  {
    title: "朋友圈",
    icon: <TeamFill color="#76c6b8" />,
    path: "/mobilepage/find/friends",
  },
  {
    title: "看一看",
    icon: <EyeFill color="orange" />,
    path: "/mobilepage/find/look",
  },
  {
    title: "附近",
    icon: <LocationFill color="#1677FF" />,
    path: "/mobilepage/find/surrounding",
  },
];

const MobileMessage = () => {
  const navigator = useNavigate();
  return (
    <FriendContent>
      <List mode="card" header={<div className="list-header">发现</div>} className="card-content">
        {LIST_MAP.map(({ title, icon, path }) => (
          <List.Item
            clickable
            prefix={icon}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                navigator(path);
              });
            }}
          >
            {title}
          </List.Item>
        ))}
      </List>
    </FriendContent>
  );
};

export default MobileMessage;
