const model=require('../model/model-ask')
const postscontrollers={
    getposts,getAllCate,delpost
}
// 获取文章的内容
function getposts(req,res){
    // 把页面选择的数据传回去
   let obj=req.query
//    console.log(result);
model.getposts(obj,(err,result)=>{
if (err) {
    // 有错就报错
    res.send({code:404,msg:'服务器异常'})
}else{
    // 没错就把数据传回去
    // console.log(result);
    res.send(result)
}
})
}

// 获取数据库里有的状态
function getAllCate(req,res){
    model.getAllCate((err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
// 删除数据库的文章
function delpost(req,res){
    let id=req.query
    
    model.delpost(id,(err)=>{
        if(err){
            res.send({
                code:404,
                err
            })
        }else{
            res.send({
                code:200,
                msg:'删除成功'
            })
        }

    })

}

module.exports=postscontrollers;