; (function () {
  // 分类状态选项动态生成
  $.ajax({
    type: 'get',
    url: '/getAllCate',
    dataType: 'json',
    success: function (hh) {
      // 生成分类下拉列表动态结构
      let html = ''
      hh.forEach(e => {
        html += `<option value="${e.id}">${e.name}</option>`
      })
      $('#category').html(html)
    }
  });
  // 获取地址栏的参数
  let id = location.search;

  //   console.log(id.indexOf('?')!=-1);
  // 当页面是编辑功能时，渲染页面
  if (id.indexOf('?') != -1) {
    // 先根据id获取页面
    $.ajax({
      type: 'get',
      url: '/getpostbyid' + id,
      success: function (hh) {
        if (hh.code == 200) {
          // 时间格式的转换
    hh.result[0].created=hh.result[0].created.replace(/ /g,"T")
    let data=hh.result[0]
    //  数据渲染
     $('#title').val(data.title);
     $('#slug').val(data.slug);
     $('#description').val(data.content);
     $('#hideimg').val(data.feature);
     $('.thumbnail').attr('src', data.feature).show()
     $("#category option[value='"+data.category_id+"']").attr("selected","selected");
     $("#status option[value='"+data.status+"']").attr("selected","selected");
     $('#created').val(hh.result[0].created);
     $('#postid').val(hh.result[0].id)
        } else {
          console.log(hh);
        }
      }
    })
  }



  // 富文本框的设置
  CKEDITOR.replace('description')

  // 文件上传事件
  $('#feature').on('change', function () {
    // 转换文件流
    let formdata = new FormData();
    //files[0]是JavaScript的属性,不能直接$(选择器)使用
    let myfile = document.querySelector('#feature').files[0];
    //    当真的有选择文件时执行
    if (myfile != undefined) {
      formdata.append('img', myfile);
      $.ajax({
        type: 'post',
        url: '/upfile',
        data: formdata,
        contentType: false, // 让ajax不要进行数据的编码处理，因为我想让formdata来处理
        processData: false, // 让ajax不要进行数据的处理，因为Formdata已经处理好了
        dataType: 'json',
        success: function (hh) {

          if (hh.code == 200) {
            $('#hideimg').val('/uploads/' + hh.imgname)
            $('.thumbnail').attr('src', '/uploads/' + hh.imgname).show()

          } else {
            console.log(hh);

          }
        }
      })
    }
  })

  

  // 点击保存时
  $('#postsave').on('click', () => {
    // 当有不等于-1就有参数是属于编辑
    if (id.indexOf('?') != -1) {
      CKEDITOR.instances.description.updateElement()
      let data = $('.row').serialize()
      //  console.log(data);
      $.ajax({
        type: 'post',
        url: '/updatepost',
        data,
        success: function (hh) {
          if(hh.code==200){
            location.href = '/admin/posts'
          }else{
            console.log(hh);
          }
          
          

        }
      })
      
    } 
    // 当等于-1以外的数就没有参数是属于写文章
    else {
      CKEDITOR.instances.description.updateElement()
      let data = $('.row').serialize()
      //  console.log(data);
      $.ajax({
        type: 'post',
        url: '/addpost',
        data,
        success: function (hh) {
          console.log(hh);
          location.href = '/admin/posts'

        }

      })
    }
    //   设置文本同步


  })








})();