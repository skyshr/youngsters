const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql")

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "poiuqwer!008",
    database : "project"
});

connection.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send('test')
});

app.post("/idplz", (req,res) => {
    const test = req.body.test;
    console.log(test);
    connection.query("INSERT INTO test (test_body) values (?)" ,[test],
        function(err,rows,fields) {
            if(err){ console.log("실패")}
            else(console.log("성공" + rows));
        });
});

app.post("/callbody", (req, res) => {
    connection.query("SELECT * FROM test", 
    function(err,rows,fields) {
        if(err) {
            console.log("불러오기 실패");
        } else {
            console.log("불러오기 성공");
            res.send(rows[0]);
        }
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});