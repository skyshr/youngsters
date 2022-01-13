const express = require("express"); 
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./mysqlcon"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('test...')
})

app.get("/login", (req,res)=>{
    pool.getConnection((err, connection) => {
        console.log("연결 성공!");
        connection.query(`SELECT * FROM userinfo`, (err, result) => {
            if(err){
                throw err;
            }
            else {
                connection.release();
                res.send(result)
            }
        });
    })
});

app.post("/signup", (req,res)=>{
    const userid = req.body.pid;
    const userpw = req.body.ppw;
    const username = req.body.pname;
    const usergender = req.body.pgender;
    const useryear = req.body.pyear;
    const userage = req.body.page;
    const useraddr = req.body.puseraddr;
    const useraddrdet = req.body.puseraddrdet;
    console.log(req.body);
    pool.getConnection((err, connection) => {
        console.log("연결 성공!")
        connection.query(`SELECT * FROM userinfo WHERE userid="${userid}"`, (err, result0) => {
            if (err) throw err;
            else if (result0.length!=0) {
                connection.release();
                res.send(false);
            }
            else {
                connection.query(`INSERT INTO userinfo (userid, userpw, username, gender, useryear, age, useraddr, useraddrdet)
                VALUES ("${userid}", "${userpw}", "${username}", "${usergender}", "${useryear}", "${userage}", "${useraddr}", "${useraddrdet}")`,
                (err, result) => {
                    if(err){
                        throw err;
                    } else {
                        console.log("회원가입 성공!");
                        connection.release();
                        res.send(true);
                    }     
                });
            }
        })
    })
});

app.post("/game", (req,res)=>{
    const usermbit = req.body.data;
    console.log(usermbit);
    pool.getConnection((err, connection) => {
        // connection.query(`INSERT INTO userinfo (userid, userpw, username, gender, useryear, age, useraddr, useraddrdet)
        // VALUES ("${userid}", "${userpw}", "${username}", "${usergender}", "${useryear}", "${userage}", "${useraddr}", "${useraddrdet}")`,
        // (err, result) => {

        console.log("연결 성공!")
        connection.query(`INSERT INTO mbtigame (Q1) VALUES ("${usermbit}")`,
        (err, result) => {
            if(err){
                throw err;
            } else {
                console.log("MBTI 정보 입력!");
                connection.release();
                res.send(true);
            }
            
        });
    })
});

app.get("/profile", (req, res) => {
    pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM userinfo", 
        function(err, rows) {
            if(err) {
                throw err;
            }else {
                console.log(rows)
                res.send(rows)
            }
        })
    })
});

app.put("/profile", (req, res) => {
    console.log('hi')
    console.log(req.body);
    pool.getConnection((err, connection) => {
        connection.query(`UPDATE userinfo SET username = '${req.body.name}', userid = '${req.body.id}', userpw = '${req.body.psw}', useraddr = '${req.body.adr}' WHERE idkey = '${req.body.sessionid}'`, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                console.log('성공!')
                res.send('true')
            }
        })
    })
})


app.get("/details", (req, res) => {
    pool.getConnection((err, connection) => {
        connection.query("SELECT * FROM details", 
        function(err, rows) {
            if(err) {
                throw err;
            }else {
                console.log(rows)
                res.send(rows)
            }
        })
    })
});

app.put("/details", (req, res) => {
    console.log('여기는와??')
    console.log(req.body);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`UPDATE details SET pro = '${req.body.pro}', edu = '${req.body.edu}', job = '${req.body.job}', hob = '${req.body.hob}', fam = '${req.body.fam}' WHERE idkey = '${req.body.sessionid}'`, (err, result) => {
            if (err) {
                console.log('err');
                // connection.query(`INSERT INTO details (idkey, pro, edu, job, hob, fam) VALUES (${req.body.sessionid}, '${req.body.pro}','${req.body.edu}', '${req.body.job}','${req.body.hob}', '${req.body.fam}'`, (err, result) => {
                //     if (err) throw err
                //     connection.release();
                //     console.log("데이터 삽입 성공");
                // })
            }
            else {
                console.log(result)
                console.log(result.changedRows==1);
                // connection.release();
                if(result.changedRows!=1) {
                    connection.query(`INSERT INTO details (idkey, pro, edu, job, hob, fam) VALUES (${req.body.sessionid}, '${req.body.pro}','${req.body.edu}', '${req.body.job}','${req.body.hob}', '${req.body.fam}')`, (err, result) => {
                    if (err) throw err
                    // connection.release();
                    console.log("데이터 삽입 성공");
                    })
                }
                connection.release();
                // console.log('데이터 수정 성공!')
                res.send(true)
            }
        })
    })
})


//민욱

app.post("/inquire", (req,res) => {
    const inq = req.body;
    console.log("inquire post");
    console.log(inq);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("INSERT INTO Inquire (name, email, number, message) values (?,?,?,?)" ,[inq.name, inq.email, inq.number, inq.message],
        function(err) {
            if(err) console.log("실패");
            else console.log("성공");
        });
    })
});

app.post("/boardwrite", (req,res) => {
    const write = req.body;
    console.log("boardwrite post");
    console.log(write);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("INSERT INTO Board (title, writer, content, regdate, modidate, hit, likeuser) values(?, ?, ?, now(), now(), 0, 0)" ,[write.title, write.writer, write.content],
        function(err) {
            if(err) console.log("실패")
            else {
                console.log("성공")
                connection.release();
                res.send(true);
                // console.log(res)
            };
        });
    })
});

app.get("/boardview", (req, res) => {
    // const view = req.view;
    console.log("boardview get");
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("SELECT * FROM Board ", 
        function(err,rows) {
            if(err) {
                console.log("불러오기 실패");
            } else {
                console.log("불러오기 성공");
                connection.release();
                res.send(rows);
            }
        })
    })
})

app.put("/boardedit", (req, res) => {
    const edit = req.body;
    console.log("boardedit put");
    console.log(edit); 
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`UPDATE board SET content=?, modidate=now() WHERE idx=${edit.idx}`, [edit.content],
        function(err, rows) {
            if(err) {
                console.log("수정 실패")
                // res.send(false)
            } else {
                console.log("수정 성공");
                connection.release()
                res.send(true)
            }
        }
    )
    })
})

app.get("/board", (req, res) => {
    // const main = req.body;
    // console.log("메인" + main);
    console.log('board get');
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("SELECT * FROM Board", 
        function(err,rows) {
            if(err) {
                console.log("메인 불러오기 실패");
            } else {
                console.log(rows);
                connection.release();
                res.send(rows);
            }
        })
    })
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})