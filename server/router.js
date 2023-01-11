import Router from 'express'
const router = Router()
import fs from 'fs'
import dayjs from 'dayjs'

// 获取文章目录树
router.get('/blogTree', function (req, res) {
  const { folder } = req.query
  const folderPath = folder ? `/${folder}` : ''

  fs.readdir(`${global.config.mdPath}${folderPath}`, (err, dirs) => {
    if (err) {
      console.log('目录读取失败')
      return res.json({code: 99, message: '目录树获取失败'})
    } else {
      const blogTreeData = dirs.map(dirName => {
        // 根据目录下的名字，获取目标
        const path = `${global.config.mdPath}${folderPath}/${dirName}`
        let target = fs.statSync(path)
        // 判断文件类型
        if (target.isFile()) {
          const utime = dayjs(target.ctime).format('YYYY-MM-DD HH:mm:ss')
          return { path, utime, name: dirName, isDirectory: false }
        } else if (target.isDirectory()) {
          return { path, name: dirName, isDirectory: true }
        }
      })

      return res.json({
        code: 0,
        data: blogTreeData,
        message: '文章目录树获取成功'
      })
    }
  })
})
// 获取文章详情
router.get('/blog/*', function (req, res) {
  res.sendFile(path.resolve('./' + req.url))
  console.log('请求图片 ' + req.url + ' 已被接受')
})
// 其他请求路径兜底
router.all('/*', ({ res }) => {
  console.log('请求路径有误')
  res.status(404).send('请求路径有误')
})

export default router
