import Router from 'express'
const router = Router()
import blog from './router/blog.js'
// let user = require('./router/user')

router.use('/blog', blog)
router.all('/*', ({ res }) => {
  console.log('请求路径有误')
  res.status(404).send('请求路径有误')
})

export default router
