const middleware=(req,res,next)=>{
    const userPassword='12345'
    if(userPassword === req.query.password){
        next()
    }else{
        res.json({
            msg:'error'
        })
    }
}
module.exports=middleware