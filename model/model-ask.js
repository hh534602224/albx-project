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
  // 数据库语句
  let sql = `SELECT posts.*,users.nickname,categories.\`name\` FROM posts,users,categories 
  WHERE posts.user_id=users.id and posts.category_id=categories.id `
  // 当传过来的数据有分类筛选要求时
  if (obj.cate && obj.cate != 'all'){
      sql+=` and category_id = ${obj.cate}`
      // 当传过来的数据有发布状态筛选要求时
  }if(obj.status && obj.status != 'all'){
    sql+=` and posts.status ='${obj.status}'`
  }
 sql+=` order by id desc
        LIMIT ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`
// 发送给数据库
  conmo.query(sql, (err, result) => {
    if (err){
      callback(err)
    }else{
     let sql1=`SELECT COUNT(*) as hh FROM posts JOIN users ON posts.user_id=users.id JOIN categories ON posts.category_id=categories.id`
      conmo.query(sql1,(err1,result1)=>{
        if(err1){
          callback(err1)
        }else{
          // console.log(result1[0].hh);
          callback(null,{data:result,total:result1[0].hh})
        }

      })
    }
    
  })

}

function getAllCate(callback){
  let sql=`SELECT categories.id,categories.\`name\` FROM categories`
  conmo.query(sql,(err,result)=>{
    if(err){
      callback({code:404,msg:'服务器异常'})
          }else{
      callback(null,result)
    }
    
  })

}
const model = {
  sqlselectuser, getposts,getAllCate
}
module.exports = model;

