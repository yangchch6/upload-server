// bee-upload 测试用例，上传请求地址：http://localhost:8083/api/reg
const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");

const app = express();
app.use(cors()); //就这一部就已经解决了跨域
//如果访问的是本地服务器，现在这步就相当于已经解决了跨域问题
//如果访问其他地址的服务器，那么此处就相当于一个服务器代理，解决跨域问题
app.listen(8083, "localhost", () => {
  console.log("已经监听8083端口");
});

let objMulter = multer({ dest: "./public" }); //实例化multer，传递的参数对象，dest表示上传文件的存储路径
app.use(objMulter.any()); //any表示任意类型的文件
// app.use(objMulter.image())//仅允许上传图片类型

app.use(express.static("./public"));
app.post("/api/reg", (req, res) => {
    let oldName = req.files[0].path;
    let newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
    fs.renameSync(oldName, newName);
    res.send({
        err: 0,
        url: "http://localhost:8083/upload/" + req.files[0].filename + path.parse(req.files[0].originalname).ext
    });
});