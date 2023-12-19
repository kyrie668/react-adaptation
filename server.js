const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// 添加访问日志中间件
app.use((req, res, next) => {
  console.log(`Received a request for111: ${req.originalUrl}`);
  next();
});
// 生成随机数的函数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 处理请求的路由
app.get("/", (req, res) => {
  const data = {
    // 传感器1  '时段1'作为y轴的刻度    ['22','23','24']分别对应的顺序是[光强，温度，湿度]的值
    sensors1: {
      时段1: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段2: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段3: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段4: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段5: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段6: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
    },
    // 传感器2
    sensors2: {
      时段1: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段2: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段3: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段4: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段5: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
      时段6: [getRandomInt(20, 1000), getRandomInt(20, 30), getRandomInt(20, 30)],
    },

    // rayWeight1: Array.from({ length: 8 }, (_, i) => ({ label: `光强${i + 1}`, value: getRandomInt(20, 30) })),
    // rayWeight2: Array.from({ length: 8 }, (_, i) => ({ label: `光强${i + 1}`, value: getRandomInt(20, 30) })),
    // temperature1: Array.from({ length: 8 }, (_, i) => ({ label: `温度${i + 1}`, value: getRandomInt(20, 30) })),
    // temperature2: Array.from({ length: 8 }, (_, i) => ({ label: `温度${i + 1}`, value: getRandomInt(20, 30) })),
    // humidity1: Array.from({ length: 8 }, (_, i) => ({ label: `湿度${i + 1}`, value: getRandomInt(20, 30) })),
    // humidity2: Array.from({ length: 8 }, (_, i) => ({ label: `湿度${i + 1}`, value: getRandomInt(20, 30) })),
    fire1: getRandomInt(20, 30) > 25 ? true : false,
    fire2: getRandomInt(20, 30) > 25 ? true : false,
  };
  res.json(data);
});

// 启动服务器
const port = 6688;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
