// 只要是用户通过ajax发过来的请求都在这里处理
const askmodel=require('../model/model-ask')
function login(req,res){
let data=req.body;
// console.log(data);
askmodel.sqlselectuser(data,(result,err)=>{
    // 有错误就的就返回给他
//    if (err){
//     res.send({code:504,msg:'服务器异常'})
//     return;
//    }
//    账号错误
   if (result[0]==undefined){
     res.send({code:404,msg:'账号错误'})
    }else{
        if(result[0].password==data.password){ 
            // 使用session写入登陆状态
            // console.log(req.session);
            req.session.isLogin = 'true'
            // 将当前用户账号密码存储到Session
            req.session.currentUser = result
            // console.log(req.session);
            // 设置完后要发送
            res.send({code:200,msg:'登录成功'})  
    }else{
        res.send({code:404,msg:'密码错误'})
    }
    }
})
}
const  logincontrollers={
    login,
}
module.exports=logincontrollers;
