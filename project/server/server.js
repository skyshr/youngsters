const express = require("express"); 
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./mysqlcon"); 
const multer = require("multer");
const path = require('path');
// const { connect } = require("http2");
const http = require("http").createServer(app);
var io = require('socket.io')(http, {cors : {origin: "*"}});

const corsOptions = {
    origin: true,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./");},
        filename: function (req, file, cb) {
            const ext = file.mimetype.split("/")[1];
            cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
        }
});

const upload = multer({
    storage: storage
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/', (req, res) =>{
    res.send('test...')
})

//시은
app.use('/', express.static(path.join(__dirname, '/')));

app.post("/api/image", upload.single('image'), (req, res, err) => {
    console.log('here');
    console.log(req.file);
    console.log(req.body);
    // console.log(req.body);
    pool.getConnection((err, connection) => {
        if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            res.send({ msg: 'Only image files (jpg, jpeg, png) are allowed!'})
        }else {
            const image = req.file.filename;
            const id = req.body.idkey;

            console.log('여기');
            console.log(image);
            
            const sqlInsert = "UPDATE userinfo SET `img` = ? WHERE idkey = ?;"
            connection.query(sqlInsert, [image, id] , (err, result) => {
                if(err) {
                    console.log("여기냐?")
                    res.send({
                        msg: err
                    })
                    connection.release()
                }
                if (result) {
                    console.log("성공이다")
                    res.send({
                        
                        data: image,
                        msg: 'Your image has been updated!'
                    })
                    connection.release()
                }
            })
        }
    })
})

// app.get("/api/image", (req, res) => {
//     db.getConnection((err, connection) => {
//         const sqlInsert = "SELECT * FROM userinfo;"
//         connection.query(sqlInsert, (err, result) => {
//             console.log("여기와ㅏㅏㅏ")

//             if (err) {
//                 console.log(err)
//                 res.send({
//                     msg: err
//                 })
//                 connection.release()
//             }
//             if (result) {
//                 // console.log("data: " + result[0].Data.toString('utf-8'));
//                 res.send(result);
//                 connection.release()
//             }
//         })
//     })
// })

app.get("/profile", (req, res) => {
    pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM userinfo", 
        function(err, rows) {
            if(err) {
                throw err;
            }else {
                console.log(rows)
                res.send(rows)
                connection.release();
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
                connection.release();
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
                connection.release();
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

app.get("/inquiry", (req, res) => {
    pool.getConnection((err, connection) => {
        connection.query("SELECT * FROM inquire", 
        function(err, rows, fields) {
            if(err) {
                console.log("err")
            }else {
                console.log(rows)
                res.send(rows)
            }
        })    
        connection.release()
    })
});

app.put("/inquiry", (req, res) => {
    pool.getConnection((err, connection) => {
        console.log(req.body);
        connection.query(`UPDATE inquire SET title = '${req.body.title}', message = '${req.body.message}' WHERE num = ${req.body.num}`, (err, result) => {
            if (err) {
                console.log('err')
            }
            else {
                console.log('성공!')
                res.send('true')
            }
        })
        connection.release()
    })

})

//기영

    io.on("connection", (socket) => {
      console.log("connection");
  
      // socket.on('room', (username)=>{   //username을 방 제목으로 정함
      //   socket.join(username, ()=>{
      //     console.log(username+'방으로 입장')
      //   })
      // })
      
      socket.on("init", (payload) => {
        console.log(payload);
      });
  
      socket.on("send message", (msg) => {
        console.log("socket send message");
        console.log(msg);
        io.emit("receive message", { username : msg.username , message : msg.message, timelog : msg.timelog, value: msg.value});
            console.log("socket 메시지 전송 확인!")
            pool.getConnection((err, connection) => {
                if (err) console.log("error");
                connection.query(`SELECT * FROM chattable where (user1, user2) = ("${msg.idkey}", "${msg.value}") or (user1, user2) = ("${msg.value}", "${msg.idkey}")`, (err, result) => {
                    if (err) console.log("error1");
                    console.log(result)

                    connection.query(`INSERT INTO chat (idx, username, messages, timelog) VALUES (${result[0].idx}, "${msg.username}", "${msg.message}", now())`, (err, result1) => {
                        if (err) console.error("error1")
                        else console.log("success!")
                        connection.release();
                    });
        //         connection.query(`SELECT * FROM chat WHERE (username="${msg.username}")`, function (err, res) {
        //         if (err) console.error("err : " + err)
        //         io.emit('nickname', res)
        //         connection.release();
        //     });
                });
            });
        });
    });
app.get('/chat', (req, res) => {
    console.log('get chat');
    console.log(req.query);
    pool.getConnection((err, connection) => {
        if (err) console.log("error");
        connection.query(`SELECT * FROM chattable where (user1, user2) = ("${req.query.user1}", "${req.query.user2}") or (user1, user2) = ("${req.query.user2}", "${req.query.user1}")`, (err, result) => {
            if (err) console.log("error1");
            if (result.length == 1) {
                console.log("length1");
                console.log(result[0]);
                connection.query(`SELECT * FROM chat where idx=${result[0].idx}`, (err, result1) => {
                    if (err) throw err;
                    console.log(result1);
                    res.send(result1);
                    connection.release();
                    console.log("messages sent!")
                })
            }
            else {
                console.log("length0");
                connection.query(`INSERT INTO chattable (user1, user2) values ("${req.query.user1}","${req.query.user2}")`, (err, result2) => {
                    if (err) console.log("error3");
                    else {
                        console.log("success!");
                        res.send([]);
                    }
                    connection.release();
                })
            }
            // console.log(result);
            // res.send(result)
            // connection.release();
        });
    });
});

app.get('/ideal', (req, res) => {
    console.log('ideal get');
    // console.log(req.body);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM idealmatch`, (err, result) => {
            if (err) throw err;
            res.send(result);
            connection.release();
        })
    })
})

app.post('/ideal', (req, res) => {
    console.log('ideal');
    console.log(req.body);
    pool.getConnection((err,connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM idealmatch where useridkey=${req.body.idkey}`, (err, result) => {
            if (err) throw err;
            if (result.length > 3) {
                console.log("하이");
                console.log(result);
                res.send({messages: "over limit"})
                connection.release();
            }
            else {
                for (let data of result) {
                    console.log(data)
                    if (data.chosenidkey == req.body.value) {
                        res.send({messages: "already in use"});
                        connection.release();
                        return;
                    }
                }
                connection.query(`INSERT into idealmatch (useridkey, chosenidkey) values (${req.body.idkey}, ${req.body.value})`, (err, result1) => {
                    if (err) throw err;
                    res.send({messages: "success"});
                    connection.release();
                })
            }

        })
    })
}) 

app.get('/game', (req, res) => {
    console.log("game get!");
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connection success!");
        connection.query(`SELECT * FROM game`, (err, result) => {
            if (err) throw err;
            console.log('data get success!');
            let game = result;

            connection.query(`SELECT * FROM userinfo`, (err, result1) => {
                if (err) throw err;
                console.log('userinfo get success!');
                let userinfo = result1;
                res.send({"game": game, "userinfo": userinfo})
                connection.release();
            })
        })
    })
})

app.post("/game", (req, res) => {
    console.log("game post!");
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connection success!");
        connection.query(`INSERT INTO game (idkey, gender, q1, q2, q3, q4, q5, q6, q7, q8) VALUES (${req.body.idkey}, "${req.body.gender}", "${req.body.q1}", "${req.body.q2}", "${req.body.q3}", "${req.body.q4}", "${req.body.q5}", "${req.body.q6}", "${req.body.q7}", "${req.body.q8}")`, (err, result) => {
            if (err) throw err;
            res.send(true);
            connection.release();
        })
    })
})

//혜인

app.get("/login", (req,res)=>{
    pool.getConnection((err, connection) => {
        console.log("연결 성공!");
        connection.query(`SELECT * FROM userinfo`, (err, result) => {
            if(err){
                throw err;
            }
            connection.query(`SELECT * FROM game`, (err, result1) => {
                if (err) throw err;
                res.send({"result": result, "game": result1})
                connection.release();
            })
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

// app.post("/game", (req,res)=>{
//     const usermbit = req.body.data;
//     console.log(usermbit);
//     pool.getConnection((err, connection) => {
//         // connection.query(`INSERT INTO userinfo (userid, userpw, username, gender, useryear, age, useraddr, useraddrdet)
//         // VALUES ("${userid}", "${userpw}", "${username}", "${usergender}", "${useryear}", "${userage}", "${useraddr}", "${useraddrdet}")`,
//         // (err, result) => {

//         console.log("연결 성공!")
//         connection.query(`INSERT INTO mbtigame (Q1) VALUES ("${usermbit}")`,
//         (err, result) => {
//             if(err){
//                 throw err;
//             } else {
//                 console.log("MBTI 정보 입력!");
//                 connection.release();
//                 res.send(true);
//             }
            
//         });
//     })
// });



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
            else {
                console.log("성공");
                connection.release();
            }
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
        connection.query(`UPDATE board SET content=?, title=?, modidate=now() WHERE idx=${edit.idx}`, [edit.content, edit.title],
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
        // connection.release();
    })
})

app.get("/boardlist", (req, res) => {
    const list = req.body.test;
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM Board`, 
        function(err,rows) {
            if(err) {
                console.log("list fail");
            } else {
                res.send(rows);
                connection.release();
            }
        })
        // connection.release();
    })
})

app.post("/boardcomment", (req,res) => {
    const comm = req.body;
    console.log(comm);
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`INSERT INTO comments (idx, userid, comment, userlike) values (${comm.idx},?,?,0)` ,[comm.userid, comm.comment],
        function(err,rows) {
            if(err){ console.log("댓글 달기 실패" + rows)}
            else {
                console.log("댓글 달기 성공");
                connection.query(`SELECT * FROM comments`, (err,rows) => {
                    if(err) throw err; 
                    res.send(rows);
                    connection.release();
                    // console.log(rows);
                })
            }
        });
        // connection.release();
    })
});

app.put("/hit", (req, res) => {
    // console.log("hit test !!")
    const hit = req.body;
    console.log(hit)
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`UPDATE board SET hit=hit+1 WHERE idx = ${hit.clickId}`,
            function(err, rows) {
                if(err) {
                    console.log("조회수 실패" + rows)
                    // res.send(false)
                } else {
                    console.log("조회수 성공");
                    connection.release();
                    // res.send(true)
                }
            }
        )
        // connection.release();
    })
})

app.put("/boardlike", (req, res) => {
    console.log(req.body)
    const body = req.body;
    const like = req.body.likeHeart;
    pool.getConnection((err, connection) => {
        if (err) throw err;
            if(like == false){
            connection.query(`UPDATE comments SET userlike=userlike-1 WHERE pk = ${body.pk}`,
                function(err, rows, fields) {
                    if(err) {
                        console.log("좋아요 실패")
                        // res.send(false)
                    } else {
                        console.log("좋아요 성공");
                        connection.query(`SELECT * FROM comments`, (err, rows) => {
                            if(err) throw err
                            else res.send(rows);
                            // console.log(rows);
                            connection.release();
                        })
                    }
                }
            )
        } else {
                connection.query(`UPDATE comments SET userlike=userlike+1 WHERE pk = ${body.pk}`,
                function(err, rows, fields) {
                    if(err) {
                        console.log("싫어요 실패")
                        // res.send(false)
                    } else {
                        console.log("싫어요 성공");
                        connection.query(`SELECT * FROM comments`, (err, rows) => {
                            if(err) throw err
                            else res.send(rows);
                            // console.log(rows);
                            connection.release();
                        })
                    }
                }
            )
        }
    })
})

app.get("/boardcommentview", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`SELECT * FROM comments`, 
        function(err,rows) {
            if(err) {
                console.log("댓글 보이기 실패");
            } else {
                res.send(rows);
                connection.release();
            }
        })
        // connecttion.release();
    })
})

http.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})

// http.listen(3001);