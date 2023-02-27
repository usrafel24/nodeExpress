const express=require('express')
const app =express()

const port =2020
app.set('view engine','ejs')
const router =require('./router/route')
app.use(router)
app.listen(port,()=>{
    console.log('sever is running http://localhost/2020');
})