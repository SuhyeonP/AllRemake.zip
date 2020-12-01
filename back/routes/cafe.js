const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');

router.get('/all/length',async(req,res,next)=>{
    const lastId=Number(req.query.lastId)
    connection.query(`SELECT CAFE_NUM FROM PSS_TB_CAFE WHERE TOWN_NUM=3`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/all',async(req,res,next)=>{
    const lastId=Number(req.query.lastId)
    connection.query(`SELECT CAFE_NUM, CAFE_NAME ,CAFE_INS,CAFE_IMG FROM PSS_TB_CAFE WHERE TOWN_NUM=3 AND CAFE_NUM>${lastId} ORDER BY CAFE_NUM ASC LIMIT 3`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})
module.exports = router;
