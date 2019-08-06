const express=require('express');
const router=express.Router();
// 引用
const pagescontrollers=require('./controllers/pagescontrollers')
const logincontrollers=require('./controllers/logincontrollers')
const postscontrollers=require('./controllers/postscontrollers')
// 设置页面请求
// 后台页面
router.get('/admin/index.html',pagescontrollers.getAdminIndexPage)
      .get('/admin/categories.html',pagescontrollers.getAdmincategoriesPage)
      .get('/admin/comments.html',pagescontrollers.getAdmincommentsPage)
      .get('/admin/login.html',pagescontrollers.getAdminloginPage)
      .get('/admin/nav-menus.html',pagescontrollers.getAdminnavmenusPage)
      .get('/admin/password-reset.html',pagescontrollers.getAdminpasswordPage)
      .get('/admin/post-add.html',pagescontrollers.getAdminpostaddPage)
      .get('/admin/posts.html',pagescontrollers.getAdminpostsPage)
      .get('/admin/profile.html',pagescontrollers.getAdminprofilePage)
      .get('/admin/settings.html',pagescontrollers.getAdminsettingsPage)
      .get('/admin/slides.html',pagescontrollers.getAdminslidesPage)
      .get('/admin/users.html',pagescontrollers.getAdminusersPage)
// 前台用户页面
      .get('/detail',pagescontrollers.getdetailPage)
      .get('/',pagescontrollers.getIndexPage)
      .get('/list',pagescontrollers.getlistPage)
      // ajax请求
      // 登陆的验证
      .post('/isuserpassword',logincontrollers.login)
      // 所有文章的你内容渲染
      .get('/getposts',postscontrollers.getposts)

// 暴露
module.exports=router;