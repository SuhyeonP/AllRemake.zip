const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');

router.get('/login',async(req,res,next)=>{
    connection.query(`SELECT ID,nick,shopMaster FROM BAEMIN_USER WHERE userId=${req.body.userId} AND password=${req.body.password}`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('just error');
        }
    })
})
router.get('/mainShops',async(req,res,next)=>{
    const lastId=parseInt(req.query.lastId,10);
    await connection.query(`SELECT * FROM BAEMIN_SHOP where id>${lastId} limit 4`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('just error');
        }
    })
})

module.exports = router;
