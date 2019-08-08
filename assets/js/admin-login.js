$('.errmasg').hide();
$('#login').on('click',()=>{

    let email=$('#email').val();
    let password=$('#password').val();
    if (email&&password!=''){
        $.ajax({
        type:'post',
        url:'http://127.0.0.1:8808/isuserpassword',
        data:{email,password},
        success:function(hh){
            // console.log(hh);
            // 页面显示错误
            if (hh.code==404){
                console.log(hh.msg);
            $('.errmasg span').text(hh.msg)
            $('.errmasg').fadeIn(500).delay(1000).fadeOut(500);
            }else{
                location.href='/admin/index'
            }    
        }
    })
    }else{
        alert('用户名或密码不能为空')
    }
    
    
})

