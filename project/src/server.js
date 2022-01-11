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

// app.post("/idplz", (req,res) => {
//     const test = req.body.test;
//     console.log(test);
//     connection.query("INSERT INTO test (test_body) values (?)" ,[test],
//         function(err,rows,fields) {
//             if(err){ console.log("실패")}
//             else(console.log("성공" + rows));
//         });
// });

// app.post("/callbody", (req, res) => {
//     connection.query("SELECT * FROM test", 
//     function(err,rows,fields) {
//         if(err) {
//             console.log("불러오기 실패");
//         } else {
//             console.log("불러오기 성공");
//             res.send(rows[0]);
//         }
//     })
// })

app.post("/inquire", (req,res) => {
    const inq = req.body;
    console.log(inq);
    connection.query("INSERT INTO Inquire (name, email, number, message) values (?,?,?,?)" ,[inq.name, inq.email, inq.number, inq.message],
        function(err,rows,fields) {
            if(err){ console.log("실패")}
            else(console.log("성공"));
        });
});

app.post("/boardwrite", (req,res) => {
    const write = req.body;
    // console.log(write);
    connection.query("INSERT INTO Board (title, writer, password, content, regdate, modidate, hit, likeuser) values(?, ?, ?, ?, now(), now(), 0, 0)" ,[write.title, write.writer, write.password, write.content],
    function(err,rows,fields) {
        if(err){ console.log("실패" + rows + fields)}
        else {
            console.log("성공")
            // console.log(res)
        };
    });
});

app.get("/boardview", (req, res) => {
    // const view = req.view;
    connection.query("SELECT * FROM Board ", 
    function(err,rows,fields) {
        if(err) {
            console.log("불러오기 실패");
        } else {
            console.log("불러오기 성공");
            res.send(rows);
        }
    })
})

app.put("/boardedit", (req, res) => {
    const edit = req.body;
    console.log(edit); 
    connection.query(`UPDATE board SET content=?, modidate=now() WHERE idx=${edit.idx} and password="${edit.password}"`, [edit.content],
        function(err, rows, fields) {
            if(err) {
                console.log("수정 실패")
                // res.send(false)
            } else {
                console.log("수정 성공");
                res.send(true)
            }
        }
    )
})

app.get("/board", (req, res) => {
    console.log('hi');
    connection.query("SELECT * FROM Board", 
    function(err,rows,fields) {
        if(err) {
            console.log("메인 불러오기 실패");
        } else {
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get("/boardlist", (req, res) => {
    const list = req.body.test;
    connection.query(`SELECT * FROM Board`, 
    function(err,rows,fields) {
        if(err) {
            console.log("list fail");
        } else {
            res.send(rows);
        }
    })
})

app.post("/boardcomment", (req,res) => {
    const comm = req.body;
    console.log(comm);
    connection.query(`INSERT INTO comments (idx, userid, comment) values (${comm.idx},?,?)` ,[comm.userid, comm.comment],
        function(err,rows,fields) {
            if(err){ console.log("댓글 달기 실패" + rows)}
            else(console.log("댓글 달기 성공"));
            res.send(rows);
        });
});

app.put("/hit", (req, res) => {
    // console.log("hit test !!")
    const hit = req.body;
    console.log(hit)
    connection.query(`UPDATE board SET hit=hit+1 WHERE idx = ${hit.clickId}`,
        function(err, rows, fields) {
            if(err) {
                console.log("조회수 실패" + rows)
                // res.send(false)
            } else {
                console.log("조회수 성공");
                // res.send(true)
            }
        }
    )
})

app.get("/boardcommentview", (req, res) => {
    console.log("댓글 보여라 !")
    connection.query(`SELECT * FROM comments`, 
    function(err,rows,fields) {
        if(err) {
            console.log("댓글 보이기 실패");
        } else {
            res.send(rows);
        }
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});