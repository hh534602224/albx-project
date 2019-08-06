const mysql = require('mysql')
// 请求数据库
let conmo = mysql.createConnection({
  post: 3306,
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  // 将日期格式进行转换
  dateStrings: true
})
// 从数据库根据用户名查询
function sqlselectuser(data, callback) {
  let sql = `SELECT * FROM users WHERE email='${data.email}'`
  conmo.query(sql, (err, result) => {
    // 把错误或者结果传回去
    callback(result, err)
  })
}
// 获取文章的内容
function getposts(obj, callback) {
  let sql = `SELECT posts.*,users.nickname,categories.\`name\` FROM posts,users,categories 
  WHERE posts.user_id=users.id and posts.category_id=categories.id LIMIT ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`
  conmo.query(sql, (err, result) => {
    callback(result, err)
  })

}

const model = {
  sqlselectuser, getposts
}
module.exports = model;

