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
    await connection.query(`SELECT * FROM BAEMIN_SHOP limit 1`,function(error,rows,fields){
        if(!error){
            return res.status(200).json(rows)
        }else{
            return res.send('just error');
        }
    })
})
router.get('/shopper/login',async(req,res,next)=>{
    const year=new Date().getFullYear()
    const month=new Date().getMonth()+1
    const day=new Date().getDate()
    const today=year+"-"+month+"-"+day
    const shop=Number(req.query.shopId)
    await connection.query(`SELECT orderSuccess,id,menus,price,createdAt FROM BAEMIN_ORDER WHERE createdAt="${today}" and shopGetOrder=${shop} ORDER BY id DESC`,function(error,row,field){
        if(!error){
            return res.status(200).json(row)
        }else{
            console.error(error)
            return res.send('error')
        }
    })
})

router.post('/inOrder',async(req,res,next)=>{
    console.log(req.query)
    const year=new Date().getFullYear()
    const month=new Date().getMonth()+1
    const day=new Date().getDate()
    const today=year+"-"+month+"-"+day
    await connection.query(`INSERT INTO BAEMIN_ORDER (
                            userOrder, shopGetOrder, menus, price, createdAt)
                                               VALUES(
                            1,6,"${req.query.menu}",${Number(req.query.price)},"${today}")`,function(error,row,filed){
        if(!error){
            res.status(200).send('success')
        }else{
            res.status(200).send('error')
        }
    })
})
router.get('/checkOrder/:orderId',async(req,res,next)=>{
    console.log(req.params)
    await connection.query(`UPDATE BAEMIN_ORDER SET orderSuccess=1 where id=${Number(req.params.orderId)}`,function(error,row,field){
        if(!error){
            res.status(200).send('success')
        }else{
            res.status(200).send('fail')
        }
    })
})

module.exports = router;
