import React from "react";
import { useCallback, useState, useEffect } from "react";
import { Card } from "./Card.js";
import uuid from "react-uuid";

const style = {
  width: "100%",
  animationDuration: "1s",
};
const Container = () => {
  useEffect(() => {
    // 用js生成包含20条对象的数组
    const objectArray = [];

    for (let i = 1; i <= 20; i++) {
      const curId = uuid();
      const newObj = {
        id: curId,
        text: ` ${curId}`,
      };
      objectArray.push(newObj);
    }
    setCards(objectArray);
  }, []);
  const [cards, setCards] = useState();
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      // 获取移动中的card
      const [draggedCard] = newArray.splice(dragIndex, 1);
      // 交换位置
      newArray.splice(hoverIndex, 0, draggedCard);
      return newArray;
    });
  }, []);
  const renderCard = useCallback((card, index) => {
    return <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />;
  }, []);
  return (
    <>
      <div style={style}>{cards?.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};

export default React.memo(Container);
