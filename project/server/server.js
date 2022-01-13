const express = require('express');
const app = express();
const port = 3001; //react의 기본값이 3000이니까 다른수
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql") //mysql 모듈 사용
const multer = require("multer")
const path = require('path')

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



const db = mysql.createPool({
    host : "localhost",
    user : "root", //mysql의 id
    password : "123", //mysql의 비밀번호
    database : "test", //사용할 데이터베이스
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post("/api/image", upload.single('image'), (req, res, err) => {
    db.getConnection((err, connection) => {
    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        res.send({ msg: 'Only image files (jpg, jpeg, png) are allowed!'})
    }else {
        const image = req.file.filename;
        const id = 1;

        console.log('여기');
        console.log(image);

        const sqlInsert = "UPDATE images SET `Data` = ? WHERE id = ?;"
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

app.use('/', express.static(path.join(__dirname, '/')));

app.get("/api/image", (req, res) => {
    db.getConnection((err, connection) => {
    const id = 1;
    const sqlInsert = "SELECT * FROM images WHERE id = ?;"
    connection.query(sqlInsert, [id] , (err, result) => {
        console.log("여기와ㅏㅏㅏ")

        if (err) {
            console.log(err)
            res.send({
                msg: err
            })
            connection.release()
        }
        if (result) {
            console.log("data: " + result[0].Data.toString('utf-8'));
            res.send({
                image: result[0].Data.toString('utf-8'),
            });
            connection.release()
        }
    })
})
})

app.get("/profile", (req, res) => {
    db.getConnection((err, connection) => {
        connection.query("SELECT * FROM profile", 
        function(err, rows) {
            let tmp = Math.floor(Math.random()*10) //0이상 11미만 (ex) 9.31)
            if(err) {
                console.log("err")
            }else {
                console.log(rows)
                res.send({
                    users: rows[tmp].users,
                    id: rows[tmp].id,
                    psw: rows[tmp].psw,
                    adr: rows[tmp].adr,
                    idkey: rows[tmp].idkey
    
                })
                connection.release()
            }
        })
        
})
});

app.put("/profile", (req, res) => {
    db.getConnection((err, connection) => {
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
        connection.release()
    })

} )


app.get("/details", (req, res) => {
    db.getConnection((err, connection) => {
        connection.query("SELECT * FROM details", 
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

app.put("/details", (req, res) => {
    db.getConnection((err, connection) => {
        console.log(req.body.sessionid);
        connection.query(`UPDATE details SET pro = '${req.body.pro}', edu = '${req.body.edu}', job = '${req.body.job}', hob = '${req.body.hob}', fam = '${req.body.fam}' WHERE idkey = ${req.body.sessionid}`, (err, result) => {
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

app.get("/game", (req, res) => {
    db.getConnection((err, connection) => {
        connection.query("SELECT * FROM game", 
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

app.put("/game", (req, res) => {
    db.getConnection((err, connection) => {
        console.log(req.body.sessionid);
        connection.query(`UPDATE game SET color = '${req.body.color}', movies = '${req.body.movies}', music = '${req.body.music}', food = '${req.body.food}', characters = '${req.body.characters}' WHERE idkey = ${req.body.sessionid}`, (err, result) => {
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

app.get("/inquiry", (req, res) => {
    db.getConnection((err, connection) => {
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
    db.getConnection((err, connection) => {
        console.log(req.body);
        connection.query(`UPDATE inquire SET title = '${req.body.title}', message = '${req.body.message}' WHERE idkey = ${req.body.sessionid}`, (err, result) => {
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

app.listen(port, () => {
    console.log(`Server run : http://localhost:${port}/`)
})