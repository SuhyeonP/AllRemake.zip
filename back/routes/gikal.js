const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');


router.get('/question',async(req,res,next)=>{
    connection.query('SELECT QUE_CONT FROM PTP2_QUES',function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})
router.get('/question/:question',async(req,res,next)=>{
    const question=Number(req.params.question)
    connection.query(`SELECT QUE_CONT,QUE_IMG FROM PTP2_QUES WHERE QUE_NUM=${question}`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/question/answer/:question',async(req,res,next)=>{
    const question=Number(req.params.question)
    connection.query(`SELECT ANS_CONT FROM PTP2_ANS WHERE QUE_NUM=${question}`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/result/char/:result',async(req,res,next)=>{
    const result=Number(req.params.result)
    connection.query(`SELECT * FROM PTP2_CHAR WHERE CHAR_BREATH=${result} ORDER BY RAND() LIMIT 1`,function(error,rows,field){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hi error')
        }
    })
})

router.get('/result/:result',async(req,res,next)=>{
    const result=Number(req.params.result)
    connection.query(`SELECT * FROM PTP2_BREATH WHERE BREATH_NUM=${result}`,function(error,rows,field){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hi error')
        }
    })
})
router.get('/more/breath/:result',async(req,res,next)=>{
    const result=Number(req.params.result)
    let h;
    connection.query(`SELECT CHAR_BREATH FROM PTP2_CHAR WHERE CHAR_NUM=${result}`,function(error,rows,field){
        if(!error){
            const where=rows
            h=where.map((x=>x.CHAR_BREATH))
            connection.query(`SELECT * FROM PTP2_BREATH WHERE BREATH_NUM=${h}`,function(error,rows,fields){
                if(!error){
                    res.status(200).json(rows)
                }else{
                    res.status(404).send('eor')
                }
            })
        }else{
            return res.send('hi error')
        }
    })
})
router.get('/more/:characterId',async(req,res,next)=>{
    const result=Number(req.params.characterId)
    connection.query(`SELECT * FROM PTP2_CHAR WHERE CHAR_NUM=${result}`,function(error,rows,field){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hi error')
        }
    })
})

module.exports = router;
