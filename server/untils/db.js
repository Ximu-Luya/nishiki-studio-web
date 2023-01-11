// 引入mysql
import { createConnection } from 'mysql'

const dbOption = global.config.db

// 创建mysql数据库连接
let connection = createConnection(
  Object.assign({}, dbOption, {timezone: '08:00'})
)

// 连接数据库
connection.connect()

/**
 * 封装数据库操作方法
 * @param {String} sql 数据库操作语句
 * @param {any} [data] 数据
 * @returns {Promise}
 */
export default function (sql, data) {
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (err, result) => {
      if (err) reject(err)
      else if (result) {
        // 结果是数据结果直接返回
        if (result instanceof Array) resolve(result)
        // 结果是操作状态按affectedRows分情况返回
        else if (result instanceof Object) {
          if (result.affectedRows !== 0) resolve(true)
          else resolve(false)
        }
      } else console.log('数据库发生未知错误')
    })
  })
}
