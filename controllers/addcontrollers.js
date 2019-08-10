const model=require('../model/model-ask')
const formidable=require('formidable')
// Node.js提供的模块处理文件路径的小工具
var path = require("path")

const addcontrollers={
    upfile,addpost,
}
// 文件上传
function upfile(req,res){
    // 1.调用实例
    var form = new formidable.IncomingForm();
    // 2.设置编码:这个编码的设置与文件上传没有本质的关系，只不过formidable可以传递普通的键值对，所以需要设置对这些参数的编码
    form.encoding = 'utf-8'
    // 3.设置文件存储目录，注意此时的__dirname是此时这个文件的当前目录，后面还要根据这个目录找到真正要放的地方
    form.uploadDir = __dirname + '/../uploads' ;
    // 4.设置保留文件扩展名
    form.keepExtensions = true;
     // 回调函数的三个参数
    // req:请求报文，传递的文件数据就是在请求报文的请求体中
    // Err:错误信息对象  fields:普通键值对
    // files：文件上传完成之后的相关信息，主要是存储上传成功之后的信息
    form.parse(req, function(err, fields, files) {
        if(err){
            res.send({
                code:404,
                msg:'图片上传失败',
                err
            })
        }else{
              res.send({
                code:'200',
                msg:'图片上传成功',
                imgname:path.basename(files.img.path)
                
            })
          
            
        }
        
      });


}

function addpost(req,res){
let data=req.body;
data.user_id=req.session.currentUser[0].id;
data.views='0';
data.likes='0';
// console.log(data);

model.addpost(data,(result)=>{
        res.send(result)

})
}


module.exports=addcontrollers;


