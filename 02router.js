const express=require('express');
const router=express.Router();
// 引用
const pagescontrollers=require('./controllers/pagescontrollers')
const logincontrollers=require('./controllers/logincontrollers')
const postscontrollers=require('./controllers/postscontrollers')
// 设置页面请求
// 后台页面
router.get('/admin/index',pagescontrollers.getAdminIndexPage)
      .get('/admin/categories',pagescontrollers.getAdmincategoriesPage)
      .get('/admin/comments',pagescontrollers.getAdmincommentsPage)
      .get('/admin/login',pagescontrollers.getAdminloginPage)
      .get('/admin/nav-menus',pagescontrollers.getAdminnavmenusPage)
      .get('/admin/password-reset',pagescontrollers.getAdminpasswordPage)
      .get('/admin/post-add',pagescontrollers.getAdminpostaddPage)
      .get('/admin/posts',pagescontrollers.getAdminpostsPage)
      .get('/admin/profile',pagescontrollers.getAdminprofilePage)
      .get('/admin/settings',pagescontrollers.getAdminsettingsPage)
      .get('/admin/slides',pagescontrollers.getAdminslidesPage)
      .get('/admin/users',pagescontrollers.getAdminusersPage)
// 前台用户页面
      .get('/detail',pagescontrollers.getdetailPage)
      .get('/',pagescontrollers.getIndexPage)
      .get('/list',pagescontrollers.getlistPage)
      // ajax请求
      // 登陆的验证
      .post('/isuserpassword',logincontrollers.login)
      // 所有文章的你内容渲染
      .get('/getposts',postscontrollers.getposts)
      // 获取数据库里有的状态
      .get('/getAllCate',postscontrollers.getAllCate)
      

// 暴露
module.exports=router;