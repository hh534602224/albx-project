// 只要是请求页面显示的都在这里处理
// 约定：所有的后台页面请求都添加/admin
// 前面页面
exports.getdetailPage = (req,res) => {
    res.render('detail.ejs')
}
exports.getIndexPage = (req,res) => {
    res.render('index.ejs')
}
exports.getlistPage = (req,res) => {
    res.render('list.ejs')
}
// 后台管理页面
exports.getAdminIndexPage = (req,res) => {
    res.render('admin/index.ejs')
}
exports.getAdmincategoriesPage = (req,res) => {
    res.render('admin/categories.ejs')
}
exports.getAdmincommentsPage = (req,res) => {
    res.render('admin/comments.ejs')
}
exports.getAdminloginPage = (req,res) => {
    res.render('admin/login.ejs')
}
exports.getAdminnavmenusPage = (req,res) => {
    res.render('admin/nav-menus.ejs')
}
exports.getAdminpasswordPage = (req,res) => {
    res.render('admin/password-reset.ejs')
}
exports.getAdminpostaddPage = (req,res) => {
    res.render('admin/post-add.ejs')
}
exports.getAdminpostsPage = (req,res) => {
    res.render('admin/posts.ejs')
}
exports.getAdminprofilePage = (req,res) => {
    res.render('admin/profile.ejs')
}
exports.getAdminsettingsPage = (req,res) => {
    res.render('admin/settings.ejs')
}
exports.getAdminslidesPage = (req,res) => {
    res.render('admin/slides.ejs')
}
exports.getAdminusersPage = (req,res) => {
    res.render('admin/users.ejs')
}