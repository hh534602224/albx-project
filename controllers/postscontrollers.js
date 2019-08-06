const model=require('../model/model-ask')
const postscontrollers={
    getposts,
}
// 获取文章的内容
function getposts(req,res){
    // 把页面选择的数据传回去
   let obj=req.query
model.getposts(obj,(result,err)=>{
if (err) {
    // 有错就报错
    res.send(err)
}else{
    // 没错就把数据传回去
    res.send(result)
}

})

}

module.exports=postscontrollers;