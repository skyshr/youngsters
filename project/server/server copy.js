// const express = require('express');
// const app = express();
// const port = 3001; //react의 기본값이 3000이니까 다른수
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mysql = require("mysql") //mysql 모듈 사용

// const connection = mysql.createConnection({
//     host : "localhost",
//     user : "root", //mysql의 id
//     password : "123", //mysql의 비밀번호
//     database : "test", //사용할 데이터베이스
// });

// connection.connect();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('시은이는 코딩 중!')
// })

// app.post("/idplz", (req, res) => {
//     const test = req.body.test;
//     // console.log(req.body);
//     connection.query("INSERT INTO test (test_body) values (?)", [test],
//     function(err, rows, fields) {
//         if(err){
//             console.log("xxxxx");
//             //console.log(err);
//         }else {
//             console.log("good");
//             //console.log(rows);
//         };
//     });
// });
// let tmp = 0;
// app.post("/callbody", (req, res) => {
//     connection.query("SELECT * FROM test",
//     function(err, rows, fields) {
//         if(err) {
//             console.log("불로오기 실패");
//         }else {
//             console.log("불러오기 성공!!");
//             res.send(rows[tmp]);
//             tmp+=1;
//         }
//     })
// })

// app.listen(port, () => {
//     console.log(`Server run : http://localhost:${port}/`)
// })