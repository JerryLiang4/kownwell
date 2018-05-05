
/**
 * Created by lenovoo on 2018/1/23.
 */
var express = require("express");
var MongoClient = require("mongodb").MongoClient;

var app = express();

app.get("/",function(req,res) {
    //连接数据库
    //假如数据库不存在，会自动创建一个数据库
    var url = "mongodb://localhost:27017/testNode";
    MongoClient.connect(url, function (err, <span style="color:#ff0000;">client</span>) {
        <strong>//client参数就是连接成功之后的mongoclient(个人理解为数据库客户端)</strong>
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据库连接成功");
<strong>//3.0新写法</strong>
    var db = client.db("testNode");
    db.collection("user").insertOne({
        "username": "jmin呀",
        "age": 23,
        "sex": "男"
    }, function (err, result) {
        if (err) {
            res.send("插入数据失败");
            return;
        }
        db.close();
        res.end();
    })

});

});
app.listen(3000);