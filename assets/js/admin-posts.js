;(function(){
  // 先给个初始值
 let  pageNum = 1;
 let pageSize=4;
//  加载所有数据库文章
  function int(cha){
    $.ajax({
    type:'get',
    url:'http://127.0.0.1:8808/getposts',
    data:{pageNum:pageNum,
      pageSize:pageSize,
      ...cha,
    },
    success:function(hh){
        let html=''
    hh.data.forEach(e => {
        html+=`<tr>
        <td class="text-center"><input type="checkbox"></td>
        <td>${e.title}</td>
        <td>${e.nickname}</td>
        <td>${e.name}</td>
        <td class="text-center">${e.created}</td>
        <td class="text-center">${e.status=='published'?'已发布':'草稿'}</td>
        <td class="text-center">
          <a href="/admin/post-add?id=${e.id}" class="btn btn-default btn-xs">编辑</a>
          <span data_id="${e.id}" class="btn btn-danger btn-xs">删除</span>
        </td>
      </tr>`
    });
        $('tbody').html(html);
        setpagenation(Math.ceil(hh.total / pageSize))
    }
})
  }
  // 调用渲染
  int();
// 设置翻页的相关属性
  function setpagenation(hh){
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pageNum,
      // 总页数
      totalPages: hh,
      //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function (event,originalEvent,type,page) {
          // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
          pageNum = page
      int()

}
  })
  }
   // 实现筛选功能
    // 加载分类数据
 $.ajax({
  type:'get',
  url:'/getAllCate',
  dataType:'json',
  success:function(hh){
    
      // 生成分类下拉列表动态结构
      let  html = '<option value="all">所有分类</option>'
      hh.forEach(e=>{
        html += `<option value="${e.id}">${e.name}</option>`
      })
      $('.cateSelector').html(html)
  }
})

// 筛选的点击事件
   $('#haha').on('click',function(){
    // 收集数据
   var obj = {
        cate:$('.cateSelector').val(),
        status:$('.statuSelector').val()
    }
    // 发起ajax请求
    int(obj)
})

// 删除文章的点击事件
$('tbody').on('click','span',function(){
      let id =$(this).attr('data_id')
      if(confirm('你是否要真的删除这骗文章')){
        $.ajax({
          type:'get',
          url:`/delpost?id=${id}`,
          success:function(hh){
            // console.log(hh);
            if(hh.code==200){
              if($('tbody>tr').length==1){
                pageNum--
              }
              alert(hh.msg)
              int()
            }else{
              console.log(hh.err);
            }
          }
        })
      }
      
      
})

console.log();

})()