const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');

router.get('/members',async(req,res,next)=>{
    const lastId=Number(req.query.lastId)
    await connection.query(`SELECT id,name,src FROM REACT_SVT_MEMBER`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/member/:member',async(req,res,next)=>{
    const member=Number(req.params.member)
    await connection.query(`SELECT * FROM REACT_SVT_MEMBER WHERE id=${member}`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})


module.exports = router;
