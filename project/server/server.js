const express = require('express');
const app = express();
const port = 3001; //react의 기본값이 3000이니까 다른수
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql") //mysql 모듈 사용
// const session = require("express-session");
// const MySQLStore = require("express-mysql-session")(session)
// const options = {
//     host : "localhost",
//     port : 3001,
//     user : "root", //mysql의 id
//     password : "123", //mysql의 비밀번호
//     database : "test", //사용할 데이터베이스
// }

// const sessionStore = new MySQLStore(options)

// app.use(session({
//     // secure: false,
//     secret: 'testsdfa',
//     resave: false,
//     saveUninitialized: true,
//     // cookie : {
//     //     maxAge:(1000 * 60 * 30)
//     // },
//     store: sessionStore
// }));


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

// app.get('/', (req, res) => {
//     res.send('시은이는 코딩 중!')w
// })

app.get("/text", (req, res) => {
    // req.session.id = "qwer";
    // console.log(req.session.id)
    // console.log(req.session.id)
    connection.query("SELECT * FROM profile", 
    function(err, rows, fields) {
        if(err) {
            console.log("err")
        }else {
            console.log(rows)
            // req.session.uid = rows[0].id;
            // console.log(req.session.uid);
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

app.put("/text", (req, res) => {
    console.log('hi')
    console.log(req.body);
    // res.send({'a':'1'})
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

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})