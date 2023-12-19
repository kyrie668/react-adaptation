import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { List, InfiniteScroll } from "antd-mobile";

const LookingWrapper = styled.div`
  width: 100%;

  .picture-list {
    display: flex;
    height: 10rem;
    width: 100%;
    /* overflow-x: scroll;
    overflow-y: hidden; */
    .adm-list {
      width: 100%;
    }
    .adm-list-body {
      height: 10rem;
      width: 100%;
      .adm-list-body-inner {
        width: 100%;
        height: 10rem;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;

        .adm-list-item {
          /* margin-bottom: 1rem; */
          .adm-list-item-content-main {
            padding: 0;
          }
        }
        img {
          border-radius: 1rem;
          width: 15rem;
          height: 10rem;
        }
      }
    }
  }
`;

const fakeData = [
  "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",

  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",

  "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",

  "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
];

const Looking = () => {
  const [hasMore, setHasMore] = useState(true);
  const [userList, setUserList] = useState(fakeData);

  const loadMore = () => {
    console.log(111);
    if (userList.length < 40) {
      setUserList((val) => [...val, ...fakeData]);
    } else {
      setHasMore(false);
    }
  };
  return (
    <LookingWrapper>
      <div className="picture-list">
        <List>
          {userList.map((item) => (
            <List.Item>
              <img src={item}></img>
            </List.Item>
          ))}
        </List>
      </div>
      <div>
       
      </div>
    </LookingWrapper>
  );
};

export default Looking;
