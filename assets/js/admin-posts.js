;(function(){
  // 先给个初始值
 let  pageNum = 1;
 let pageSize=2;
  function int(cha){
    $.ajax({
    type:'get',
    url:'http://127.0.0.1:8808/getposts',
    data:{pageNum:pageNum,
      pageSize:pageSize,
      ...cha,
    },
    success:function(hh){
      console.log(hh);
      console.log(hh.total);
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
          <a href="javascript:;" class="btn btn-default btn-xs">编辑</a>
          <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
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


   $('#haha').on('click',function(){
    // 收集数据
console.log('111');
   var obj = {
        cate:$('.cateSelector').val(),
        status:$('.statuSelector').val()
    }
    // 发起ajax请求
    int(obj)
})


})()