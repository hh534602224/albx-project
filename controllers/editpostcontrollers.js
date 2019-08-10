const model=require('../model/model-ask')
const editpostcontrollers={
    getpostbyid,updatepost
}
 // 根据id获取文章的内容
function getpostbyid (req,res){
   let id= req.query
   model.getpostbyid(id,(err,result)=>{
       if(err){
           res.send({
               code:404,
               msg:'服务器异常，查询失败',
               err 
           })
       }else{
           res.send({
            code:200,
            msg:'查询成功',
            result
           })
       }
   })


}
// 更新文件
function updatepost(req,res){
    let obj=req.body;
model.updatepost(obj,(err,result)=>{
    if(err){
        console.log(err);
        res.send({
            code:404,
            msg:'服务器异常',
            err
        })
    }else{
        res.send({
            code:200,
            msg:'更新成功',
        })
    }
})
}

// 暴露
module.exports=editpostcontrollers