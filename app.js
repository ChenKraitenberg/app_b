const express = require("express"); // מייבאים את אקספרס
const app = express(); // מפעילים את אקספרס כאילו זו פונקציה
const dotenv = require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

const postsRoutes = require("./routes/posts_routes");
app.use("/posts", postsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
