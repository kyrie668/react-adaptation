import React, { startTransition } from "react";
import {
  AddOutline,
  SystemQRcodeOutline,
  RightOutline,
  SetOutline,
  ChatCheckOutline,
  SmileOutline,
  FolderOutline,
  MailOutline,
  PictureOutline,
} from "antd-mobile-icons";

import { Card, Avatar, Badge, List } from "antd-mobile";
import styled from "styled-components";
const AvatarUrl = require("@/assets/images/avatar.png");

const MePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(204, 204, 204, 0.3);
  display: flex;
  flex-direction: column;
  .adm-list {
    width: 100%;
  }
  .info-card {
    padding: 4rem 1rem 0rem 1rem;
    height: 13rem;
  }
  .adm-card {
    margin-bottom: 0.5rem;
    border-radius: 0;
    .adm-list-item {
      font-size: 1.2rem;
    }
  }
  .adm-card-body {
    padding: 0;
  }
  .info-card,
  .adm-card-body {
    display: flex;
    position: relative;
    width: 100%;
    .info-card-avater {
      width: 5rem;
      height: 5rem;
      background-size: contain;
      border-radius: 0.5rem;
    }
    .info-card-center {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-left: 1rem;
      .name {
        font-size: 1.5rem;
        font-weight: 600;
        color: #000;
      }
      .account {
        font-size: 1rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
      }
      .extra {
        display: flex;
        gap: 0.5rem;
        > div {
          display: flex;
          border-radius: 0.8rem;
          border: 1px solid rgba(204, 204, 204, 0.5);
          padding: 0.2rem 0.5rem;
          align-items: center;
          gap: 0.3rem;
        }
        .adm-badge-wrapper {
          padding-right: 1rem;
          .adm-badge-dot {
            width: 5px;
          }
        }
        .look {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
      }
    }
    .other {
      display: flex;
      gap: 1rem;
      align-items: center;
      position: absolute;
      top: 40%;
      right: 1rem;
    }
  }
`;

const MobileMe = () => {
  const onClick = () => {};
  return (
    <MePageWrapper>
      <Card className="info-card " onClick={onClick}>
        <div className="info-card-avater" style={{ backgroundImage: `url(${AvatarUrl})` }}></div>
        <div className="info-card-center">
          <div className="name">TEST PERSON</div>
          <div className="account">微信号：A456112121323</div>
          <div className="extra">
            <div>
              <AddOutline />
              <span>状态</span>
            </div>
            <Badge color="#108ee9" content={Badge.dot} style={{ "--right": "8%", "--top": "50%", "--color": "red" }}>
              <div className="look">
                <Avatar src={AvatarUrl} style={{ "--size": "1rem", "--border-radius": "50%" }} />
                <span>1个朋友</span>
              </div>
            </Badge>
          </div>
        </div>
        <div className="other">
          <SystemQRcodeOutline />
          <RightOutline />
        </div>
      </Card>
      <Card>
        <List>
          <List.Item
            clickable
            prefix={<ChatCheckOutline color="green" />}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                // navigator(path);
              });
            }}
          >
            服务
          </List.Item>
        </List>
      </Card>
      <Card>
        <List>
          <List.Item
            clickable
            prefix={<MailOutline color="#1677ff" />}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                // navigator(path);
              });
            }}
          >
            收藏
          </List.Item>
          <List.Item
            clickable
            prefix={<PictureOutline color="#1677ff" />}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                // navigator(path);
              });
            }}
          >
            朋友圈
          </List.Item>
          <List.Item
            clickable
            prefix={<FolderOutline color="#1677ff" />}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                // navigator(path);
              });
            }}
          >
            卡包
          </List.Item>
          <List.Item
            clickable
            prefix={<SmileOutline color="orange" />}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                // navigator(path);
              });
            }}
          >
            表情
          </List.Item>
        </List>
      </Card>
      <Card>
        <List>
          <List.Item
            clickable
            prefix={<SetOutline color="#1677ff" />}
            onClick={() => {
              startTransition(() => {
                // 在这里执行要进行的状态更新或其他操作
                // navigator(path);
              });
            }}
          >
            设置
          </List.Item>
        </List>
      </Card>
    </MePageWrapper>
  );
};

export default MobileMe;
