import express from 'express'
const app = express()

// 解决跨域
import cors from 'cors'
app.use(cors())

// 控制台输出请求信息
app.all(/\/api.*/, function (req, res, next) {
  const { headers, method, url } = req
  console.log(`From ${headers.referer || '未知'} ${method} ${decodeURIComponent(url)}`)
  next()
})

// 引入总路由
import router from './router.js'
app.use('/api', router)
app.use('/', express.static('dist'))

// 导出app模块
export default app