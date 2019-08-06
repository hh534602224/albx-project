;(function(){
$.ajax({
    type:'get',
    url:'http://127.0.0.1:8808/getposts',
    data:{pageNum:1,pageSize:3},
    success:function(hh){
        // let html=templeat('hhh',{target:hh})
        console.log(hh);
        let html=''
    hh.forEach(e => {
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
    }
})


})()