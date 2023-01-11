import Router from 'express'
const router = Router()
import fs from 'fs'
import dayjs from 'dayjs'
import path from 'path'

/**
 * 获取文章
 * 1.路径为目录则返回目录树
 * 2.路径为文章文件则返回内容
 */
router.get('/blog*', function (req, res) {
  try {
    // 处理文件路径
    // 剔除掉url中的/blog与将url中的编码转回中文
    const requestPath = decodeURI(req.url.replace('/blog', ''))
    const systemPath = path.resolve(`${global.config.mdPath}${requestPath}`)

    // 路径为文件返回文件内容
    if(fs.statSync(systemPath).isFile()){
      console.log(`└ 找到文章 ${requestPath}`)
      return res.json({
        code: 0,
        data: fs.readFileSync(systemPath, 'utf8'),
        message: '找到文章了喵~'
      })
    } 
    // 路径为目录则读取目录，且返回目录树
    else {
      fs.readdir(systemPath, (err, files) => {
        if (err) {
          console.log('└ 目录读取失败')
          return res.json({ code: 99, message: '目录树读取失败喵QAQ' })
        }

        // 读取目录树
        let blogTreeData = []
        files.forEach(fileName => {
          // 根据目录下的名字，获取目标
          const filePath = `${systemPath}/${fileName}`
          let target = fs.statSync(filePath)
          // 判断文件类型
          if (target.isFile()) {
            const utime = dayjs(target.ctime).format('YYYY-MM-DD HH:mm:ss')
            if(fileName.includes('.md')) {
              const articleName = fileName.replace('.md', '')
              blogTreeData.push({
                path: `${requestPath}/${fileName}`,
                utime,
                title: articleName,
                isDirectory: false
              }) 
            }
          } else if (target.isDirectory()) {
            blogTreeData.push({ 
              path: `${requestPath}/${fileName}`,
              title: fileName,
              isDirectory: true
            }) 
          }
          })
        console.log(`└ 找到目录 ${requestPath || '/'}`)
  
        return res.json({
          code: 0,
          data: blogTreeData,
          message: '找到了目录喵~'
        })
      })
    }
  } catch (err) {
    if(err.errno === -2) {
      console.log('└ 路径查找文件失败')
      return res.json({ code: 99, message: '路径好像有误喵QAQ' })
    } else{
      console.log('└ 其他位未知错误')
      return res.json({ code: 99, message: '遇到不知道的错误了喵╥﹏╥...' })
    }
  }
})
// 其他请求路径兜底
router.all('/*', ({ res }) => {
  console.log('└ 请求路径有误')
  res.status(404).send('请求路径有误')
})

export default router
