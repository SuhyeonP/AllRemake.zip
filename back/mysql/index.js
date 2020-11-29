const mysql=require('mysql')
const dotenv=require('dotenv');

dotenv.config()
const connection=mysql.createConnection({
    user: 'ahah12k',
    password: process.env.DB_PASSWORD,
    database: 'ahah12k',
    host: 'ahah12k.cafe24.com',
    port:3306,
})
module.exports={connection}
