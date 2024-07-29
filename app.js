"use strict"

const express = require("express");
const app = express();

const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// use -> 미들웨어 등록해주는 메서드
app.use("/", home);

module.exports = app;
