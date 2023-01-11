import Router from 'express'
const router = Router()
import dayjs from 'dayjs'

// 获取文章目录树
router.get('/blogTree', function (req, res) {
  const { folder } = req.query
  fs.readdir(`./upload${folder ? `/${folder}` : ''}`, (err, files) => {
    if (err) {
      console.log('文件读取失败')
      return response.error5(res)
    } else {
      const filesInfo = files.map(filename => {
        let file = fs.statSync(`./upload${folder ? `/${folder}` : ''}/${filename}`)
        let url = `http://${req.headers.host}/upload${folder ? `/${folder}` : ''}/${filename}`
        if (file.isFile()) {
          let datetime = dayjs(file.ctime).format('YYYY-MM-DD HH:mm:ss')
          return { url, datetime, name: filename, isDirectory: false }
        } else if (file.isDirectory()) {
          return { url, name: filename, isDirectory: true }
        }
      })
      
      return res.json({
        code: 0,
        data: filesInfo,
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
