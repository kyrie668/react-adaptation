import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { LeftOutline, CameraOutline, MoreOutline, MessageOutline, HeartOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router";
import { Image, List, InfiniteScroll, Toast, PullToRefresh, Popover, ImageViewer } from "antd-mobile";

const AvatarUrl = require("@/assets/images/avatar.png");

const FriendBgUrl = require("@/assets/images/friend-bg.png");

const fakeData = [
  {
    id: "1",
    time: "3小时前",
    likes: ["test", "张三", "李四", "test", "张三", "李四", "test", "张三", "李四"],
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    commentList: [
      {
        author: "kyrie555",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie58996",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie545",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
      "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    ],
    description:
      "Deserunt dolor ea eaque eosDeserunt dolor ea eaque eosDeserunt dolor ea eaque eosDeserunt dolor ea eaque eosDeserunt dolor ea eaque eosDeserunt dolor ea eaque eos",
  },
  {
    id: "2",
    time: "13小时前",
    avatar:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
    name: "Sara Koivisto",
    description: "Animi eius expedita, explicabo",
    images: [
      "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    ],
    commentList: [
      {
        author: "kyrie555",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie58996",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie545",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
    ],
  },
  {
    id: "3",
    time: "3天前",
    likes: ["test", "张三", "李四", "test", "张三", "李四", "test", "张三", "李四"],
    commentList: [
      {
        author: "kyrie555",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie58996",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie545",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
    ],
    avatar:
      "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Marco Gregg",
    description: "Ab animi cumque eveniet ex harum nam odio omnis",
  },
  {
    id: "4",
    time: "3天前",
    likes: ["test", "张三", "李四"],
    commentList: [
      {
        author: "kyrie555",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie58996",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
      {
        author: "kyrie545",
        comment: "哈哈哈哈哈哈哈哈哈静安寺附近安哥拉那两个男",
      },
    ],
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
];

const FriendContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* display: flex; */
  flex-direction: column;
  /* padding: 0 0.5rem; */
  .top-icon,
  .top-icon-visible {
    position: fixed;
    width: 100%;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    top: 0;
    flex-shrink: 0;
    > span {
      display: none;
    }
    > svg {
      font-size: 1.5rem;
      color: #fff;
    }
  }
  .top-icon-visible {
    background: rgba(204, 204, 204, 0.6);
    > svg {
      color: #000;
    }
    > span {
      display: block;
      color: #000;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
  > .friend-bg {
    width: 100%;
    height: 18rem;
    background-size: 100% 100%;
  }
  > .person-info {
    position: absolute;
    width: 100%;
    right: 2rem;
    top: 16rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 0.8rem;
    > span {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 400;
    }
    > div {
      width: 4rem;
      height: 4rem;
      border-radius: 0.5rem;
      background-size: 100% 100%;
    }
  }
  .friend-list {
    flex: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    .friend-list-item {
      flex-shrink: 0;
      height: 50rem;
    }
  }
  .adm-list-item-content {
    width: 100%;
  }
  .friend-item,
  .adm-list-item-content-main {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    border-bottom: 1px solid #efefef;
    width: 100%;
    .friend-picture {
      width: 2.5rem;
      height: 2.5rem;
      background-size: 100% 100%;
      flex-shrink: 0;
    }
    .friend-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      .name {
        font-size: 1.2rem;
        font-weight: 400;
        color: #1677ff;
        margin-bottom: 0.5rem;
        flex-shrink: 0;
      }
      .desc {
        font-size: 1.2rem;
        font-weight: 400;
        color: #000;
        flex: 1;
      }
      .image-list {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-evenly; */
        gap: 0.1rem;
        width: 100%;
        .image-item {
          width: 33%;
          flex-shrink: 1;
          // 宽高比为1：1
          aspect-ratio: 1/1;
          background-size: 100% 100%;
        }
      }
      .extra {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        width: 100%;
        .time {
          font-size: 1rem;
          color: #ccc;
        }
        .memu {
          background-color: rgba(204, 204, 204, 0.1);
          border-radius: 0.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.1rem 0.4rem;
        }
      }
      .detail {
        background-color: rgba(204, 204, 204, 0.3);
        display: flex;
        width: 100%;
        padding: 2px 4px;
        flex-direction: column;
        .likes {
          width: 100%;
          color: #1677ff;
          font-size: 1rem;
        }
        .comments {
          font-size: 1rem;
          /* border-top: 1px solid #ccc;
          padding-top:0.5rem; */
          .author {
            color: #1677ff;
          }
        }
      }
    }
  }
`;

const Friend = () => {
  const navigator = useNavigate();

  const [userList, setUserList] = useState(fakeData);
  const [hasMore, setHasMore] = useState(true);
  const [topActive, setTopActive] = useState(true);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [demoImages, setDemoImages] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 当容器进入可视区域时的逻辑
            setTopActive(true);
          } else {
            // 当容器离开可视区域时的逻辑
            setTopActive(false);
          }
        });
      },
      { threshold: 0 } // 可根据需要调整阈值
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const loadMore = () => {
    if (userList.length < 40) {
      setUserList((val) => [...val, ...fakeData]);
    } else {
      setHasMore(false);
    }
  };

  const doRefresh = async () => {
    setTimeout(() => {
      Toast.show({
        icon: "success",
        content: "刷新成功",
      });
    }, 1000);
  };

  return (
    <FriendContent>
      <div className={topActive ? "top-icon" : "top-icon-visible"}>
        <LeftOutline
          onClick={() => {
            navigator(-1);
          }}
        />
        <span>朋友圈</span>
        <CameraOutline />
      </div>
      <div className="friend-bg" style={{ backgroundImage: `url(${FriendBgUrl})` }} ref={containerRef}></div>
      <div className="person-info">
        <span>test person</span>
        <div style={{ backgroundImage: `url(${AvatarUrl})` }}></div>
      </div>
      <div className="friend-list">
        <PullToRefresh onRefresh={doRefresh}>
          <List>
            {userList.map((user) => (
              <List.Item className="friend-item">
                <div className="friend-picture" style={{ backgroundImage: `url(${AvatarUrl})` }}></div>
                <div className="friend-content">
                  <div className="name">{user.name}</div>
                  <div className="desc">{user.description}</div>
                  {user.images?.length ? (
                    <div className="image-list">
                      {user.images.map((item, index) => (
                        <div
                          className="image-item"
                          onClick={() => {
                            setCurIndex(index)
                            ImageViewer.Multi.show({
                              defaultIndex: index,
                              images: user.images,
                              onIndexChange: (idx) => {
                                setCurIndex(idx);
                              },
                              onClose: () => {
                                setVisible(false);
                                setDemoImages([]);
                                setCurIndex(0);
                              },
                            });
                          }}
                          style={{ backgroundImage: `url(${item})` }}
                        ></div>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="extra">
                    <span className="time">{user.time}</span>
                    <Popover
                      style={{ "--arrow-size": "0rem" }}
                      content={
                        <div className="test" style={{ display: "flex", padding: "0.2rem 0rem", width: "10rem" }}>
                          <div
                            style={{
                              width: "50%",
                              borderRight: "1px solid #ccc",
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              gap: "5px",
                              padding: "0 0.8rem",
                            }}
                          >
                            <HeartOutline fontSize={"1rem"} />
                            <span>赞</span>
                          </div>
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              alignItems: "center",
                              // justifyContent: "center",
                              gap: "5px",
                              padding: "0 0.8rem",
                            }}
                          >
                            <MessageOutline fontSize={"1rem"} /> <span style={{ fontSize: "1rem" }}>评论</span>
                          </div>
                        </div>
                      }
                      mode="dark"
                      trigger="click"
                      placement="left"
                    >
                      <div className="memu">
                        <MoreOutline fontSize={"1rem"} color="#1677ff" />
                      </div>
                    </Popover>
                  </div>
                  {user.commentList?.length || user.likes?.length ? (
                    <div className="detail">
                      {user.likes?.length ? (
                        <div className="likes">
                          {
                            <>
                              <HeartOutline fontSize={"1rem"} style={{ marginRight: "5px" }} />
                              <span>{user.likes.join("，")}</span>
                            </>
                          }
                        </div>
                      ) : (
                        <></>
                      )}
                      {user.commentList?.length ? (
                        <div className="comments">
                          {user.commentList.map((item) => (
                            <div>
                              <span className="author">{item.author}</span>
                              <span>:{item.comment}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </List.Item>
            ))}
          </List>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </PullToRefresh>
      </div>
      <ImageViewer.Multi
        // images={demoImages}
        visible={visible}
      />
    </FriendContent>
  );
};

export default Friend;
