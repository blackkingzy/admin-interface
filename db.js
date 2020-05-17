const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize("mysql", "zhangyue", "zY1003975792.", {
  host: "49.235.8.43",
  dialect: "mysql",
  pool: {
    max: 5, // 连接池最大连接数量
    min: 0, // 连接池最小连接数量
    idle: 10000, // 如果一个线程超过10秒钟没有被使用过就释放该线程
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
