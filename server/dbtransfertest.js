const fs = require('fs');
const mysql = require('sync-mysql');
const crypto = require('crypto');
const dbconfig = require('./mydbsql.json');
const ENCRYPTION_KEY = 'abcdefghijklmnop'.repeat(2);
const IV_LENGTH = 16;

var connection = new mysql({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database
})

function encrypt(text) {
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);

    const encrypted = cipher.update(text);

    return (iv.toString('hex') + ':' + Buffer.concat([encrypted, cipher.final()]).toString('hex'));
}

// function decrypt(text) {
//     const textParts = text.split(':');
//     const iv = Buffer.from(textParts.shift(), 'hex');
//     const encryptedText = Buffer.from(textParts.join(':'), 'hex');
//     const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);

//     const decrypted = decipher.update(encryptedText);

//     return Buffer.concat([decrypted, decipher.final()]).toString();
// }

var tmp = JSON.parse(fs.readFileSync('./dummywomen.json'));
for (var data of tmp) {
    let dummyUserinfo = [data['userid'], data['username'], encrypt(data['userpw']), data['gender'], data['img'], String(data['useryear']), String(data['age']), data['useraddr'], data['useraddrdet']];
    let dummyGame = [data['idkey'], data['gender'], data['q1'], data['q2'], data['q3'], data['q4'], data['q5'], data['q6'], data['q7'], data['q8']];
    // let pwcrypto = encrypt(tmp[key].userpassword);
    // console.log(pwcrypto);
    const sql = `INSERT INTO userinfo (userid, username, userpw, gender, img, useryear, age, useraddr, useraddrdet) VALUES (?,?,?,?,?,?,?,?,?)`;
    connection.query(sql, dummyUserinfo);
    const sql1 = `INSERT INTO game (idkey, gender, q1, q2, q3, q4, q5, q6, q7, q8) VALUES (?,?,?,?,?,?,?,?,?,?)`;
    connection.query(sql1, dummyGame);
    // console.log(dummyUserinfo);
    // console.log(dummyGame);
}