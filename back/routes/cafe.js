const express = require('express');
const router = express.Router();
const { connection }=require('../mysql/index');

router.get('/all/length',async(req,res,next)=>{
    const lastId=Number(req.query.lastId)
    await connection.query(`SELECT CAFE_NUM FROM PSS_TB_CAFE WHERE TOWN_NUM=3`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/all',async(req,res,next)=>{
    const lastId=Number(req.query.lastId)
    await connection.query(`SELECT CAFE_NUM, CAFE_NAME ,CAFE_INS,CAFE_IMG FROM PSS_TB_CAFE WHERE TOWN_NUM=3 AND CAFE_NUM>${lastId} ORDER BY CAFE_NUM ASC LIMIT 3`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('hello express');
        }
    })
})

router.get('/:cafeId',async(req,res,next)=>{
    const cafeId=Number(req.params.cafeId)
    let sendData={}
    await connection.query(`SELECT * FROM PSS_TB_CAFE WHERE CAFE_NUM=${cafeId}`,function(error1,rows1,fields){
        if(!error1){
            connection.query(`SELECT * FROM PSS_TB_MENU WHERE CAFE_NUM=${cafeId} ORDER BY MENU_PART ASC`,function(error2,rows2,fields){
                if(!error2){
                    sendData={rows1,rows2}
                }
            })
            connection.query(`SELECT SUBIMG_ADDR,IMG_ADDR FROM PSS_TB_IMG WHERE CAFE_NUM=${cafeId}`,function(errors3,rows3,fields){
                if(!errors3){
                    sendData={...sendData,rows3}
                    return res.status(200).json(sendData)
                }else{
                    return res.send('hi')
                }
            })
        }else{
            return res.send('hello express');
        }
    })
})

module.exports = router;
