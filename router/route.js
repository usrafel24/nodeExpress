const express =require('express')
const router =express.Router()
// const path=require('path')
const passcode =require('../middleware/middle')
// router.use(passcode)
router.get('/',passcode,(req,res)=>{
    res.render('home',{
        title:'homePage'
    })
})
router.get('/about',(req,res)=>{
    res.render('about',{
        title:'aboutPage'
    })
})
router.get('/photo',(req,res)=>{
    res.render('photo',{
        title:'photoPage'
    })
})
module.exports=router