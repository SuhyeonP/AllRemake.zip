const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');

router.get('/members',async(req,res,next)=>{
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

router.get('/goings',async(req,res,next)=>{
    const lastId=Number(req.query.lastId)
    await connection.query(`SELECT * FROM REACT_SVT_GOING WHERE dayid>${lastId} ORDER BY dayid ASC LIMIT 3`,function(err,rows,fields){
       if(!err){
           connection.query(`SELECT dayid FROM REACT_SVT_GOING ORDER BY dayid DESC`,function(error,row,filed){
               if(!error){
                   return res.status(200).json({rows,row})
               }
           })
       } else{
           return res.status(404).send('hi')
       }
    })
})

router.get('/going/:gid',async(req,res,next)=>{
    const gid=Number(req.params.gid)
    await connection.query(`SELECT * FROM REACT_SVT_GOING WHERE id=${gid}`,function(err,rows){
        if(!err){
            connection.query(`SELECT * FROM REACT_SVT_IMAGE WHERE gid=${gid}`,function(error,row){
                if(!error){
                    return res.status(200).json({row,rows})
                }
            })
        }else{
            return res.status(404).send('error')
        }
    })
})

module.exports = router;
