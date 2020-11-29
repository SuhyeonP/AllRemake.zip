const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');
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
module.exports = router;
