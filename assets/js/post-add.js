;(function(){
    // 富文本框的设置
CKEDITOR.replace('description')

    // 文件上传事件
$('#feature').on('change',function(){
    // 转换文件流
    let formdata=new FormData();
    //files[0]是JavaScript的属性,不能直接$(选择器)使用
   let myfile= document.querySelector('#feature').files[0];
//    当真的有选择文件时执行
   if(myfile!=undefined){
   formdata.append('img',myfile);
   $.ajax({
       type:'post',
       url:'/upfile',
       data:formdata,
       contentType:false, // 让ajax不要进行数据的编码处理，因为我想让formdata来处理
       processData:false, // 让ajax不要进行数据的处理，因为Formdata已经处理好了
       dataType:'json',
       success:function(hh){
           console.log(hh);
        if (hh.code==200){
            $('#hideimg').val('/uploads/'+hh.imgname)
            $('.thumbnail').attr('src','/uploads/'+hh.imgname).show()

        }else{
            console.log(hh);
            
        }
       }
   })
   }
})

// 分类状态选项动态生成
$.ajax({
    type:'get',
    url:'/getAllCate',
    dataType:'json',
    success:function(hh){
        // 生成分类下拉列表动态结构
        let  html = ''
        hh.forEach(e=>{
          html += `<option value="${e.id}">${e.name}</option>`
        })
        $('#category').html(html)
    }
  });

// 点击保存时
$('#postsave').on('click',()=>{
//   设置文本同步
CKEDITOR.instances.description.updateElement()
 let data=$('.row').serialize()
//  console.log(data);
$.ajax({
    type:'post',
    url:'/addpost',
    data,
    success:function(hh){
        console.log(hh);
        location.href='/admin/posts'
        
    }

})

})






})();