const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');
const HttpSession =require('http')
router.get('/question',async(req,res,next)=>{
    connection.query('SELECT QUE_CONT FROM PTP_QUESTION',function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})
router.get('/question/:question',async(req,res,next)=>{
    const question=Number(req.params.question)
    if(question===1){

    }
    connection.query(`SELECT QUE_CONT FROM PTP_QUESTION WHERE QUE_NUM=${question}`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/answer/:question',async(req,res,next)=>{
    const question=Number(req.params.question)
    connection.query(`SELECT ANS_CONT FROM PTP_ANS WHERE QUE_NUM=${question}`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})
router.get('/spell/:question',async(req,res,next)=>{
    const question=Number(req.params.question)
    connection.query(`SELECT ANS_SPELL FROM PTP_ANS WHERE QUE_NUM=${question} LIMIT 1`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})
router.get('/result/:result',async(req,res,next)=>{
    const result=(req.params.result)
    connection.query(`SELECT CHAMP_NM,CHAMP_EASY,CHAMP_EXP,LINE_SEP FROM PTP_CHAMPION WHERE BINARY(CHAMP_RESULT="${result}") ORDER BY RAND() LIMIT 1`,function(err,row){
        if(!err){
            return res.status(200).json(row)
        }else{
            return res.send('i crushed error now')
        }
    })
})
module.exports = router;
