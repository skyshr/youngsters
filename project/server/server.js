const express = require('express');
const app = express();
const port = 3001; //react의 기본값이 3000이니까 다른수
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql") //mysql 모듈 사용

const connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "123", //mysql의 비밀번호
    database : "test", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.get("/profile", (req, res) => {

    connection.query("SELECT * FROM profile", 
    function(err, rows, fields) {
        if(err) {
            console.log("err")
        }else {
            console.log(rows)
            res.send({
                users: rows[0].users,
                id: rows[0].id,
                psw: rows[0].psw,
                adr: rows[0].adr,
                idkey: rows[0].idkey

            })
        }
    })    
});

app.put("/profile", (req, res) => {
    console.log('hi')
    console.log(req.body);
    connection.query(`UPDATE profile SET users = '${req.body.name}', id = '${req.body.id}', psw = '${req.body.psw}', adr = '${req.body.adr}' WHERE idkey = '${req.body.sessionid}'`, (err, result) => {
        if (err) {
            console.log('error')
        }
        else {
            console.log('성공!')
            res.send('true')
        }
    })
} )


app.get("/details", (req, res) => {

    connection.query("SELECT * FROM details", 
    function(err, rows, fields) {
        if(err) {
            console.log("err")
        }else {
            console.log(rows)
            res.send({
                pro: rows[0].pro,
                edu: rows[0].edu,
                job: rows[0].job,
                hob: rows[0].hob,
                fam: rows[0].fam,
                dekey: rows[0].dekey

            })
        }
    })    
});

app.put("/details", (req, res) => {
    console.log('여기는와??')
    console.log(req.body);
    connection.query(`UPDATE details SET pro = '${req.body.pro}', edu = '${req.body.edu}', job = '${req.body.job}', hob = '${req.body.hob}', fam = '${req.body.fam}' WHERE dekey = ${req.body.sessionid}`, (err, result) => {
        if (err) {
            console.log('err')
        }
        else {
            console.log('성공!')
            res.send('true')
        }
    })
} )

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})