import { Router, json } from 'express'
let router = Router()
import dayjs from 'dayjs'

// 图片上传
// let upload = require('../untils/upload')
// router.use('/', upload)

// 引入请求body解析中间件
let jsonParser = json()

// 引入DAO层
import { selectTotal, selectByPage, selectById, insert, update, remove } from '../DAO/blogDAO.js'
// 引入Response层
import { success0, success4, error0, contributorForbiddenCheck, success1, error5 } from '../untils/response.js'

// 获取博客数据
router.get('/', function (req, res) {
  const { page, id } = req.query

  if (page) {
    // 查询总数
    console.log('正在获取第', page, '页的博客...')
    selectTotal().then(result => {
      let pageTotal = result[0].pageTotal
      // 查询指定页数
      selectByPage(page).then(result => {
        return success0(res, '查询成功，已获取第' + page + '页的博客', {
          pageTotal: pageTotal,
          blogs: result,
        })
      })
    })
  } else if (id) {
    console.log('正在获取id为', id, '的博客...')
    // 查询指定ID
    selectById(id).then(result => {
      if (result.length === 0) return success4(res, '查询成功, 但未查到相关数据')
      else return success0(res, '查询成功', result[0])
    })
  } else return error0(res)
})

// 新增博客
router.post('/', jsonParser, (req, res) => {
  const { title, tag_list, section, content } = req.body
  const { _uid: author } = req['user']
  const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const newblogItem = [title, tag_list, section, author, content, datetime, datetime]

  // 检查是否为贡献者用户
  if (contributorForbiddenCheck(req, res)) return

  console.log('正在添加标题为', title, '的博客...')
  insert(newblogItem).then(result => {
    if (result) return success1(res, '博客已创建')
    return error5(res)
  })
})

// 更新指定id博客
router.put('/', jsonParser, (req, res) => {
  const id = req.query.id
  const currentUID = req['user']._uid
  const { title, tag_list, section, content, author_id } = req.body
  const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const blogItem = [title, tag_list, section, content, datetime, id]

  // 检查是否为贡献者用户
  if (contributorForbiddenCheck(req, res)) return
  // 检查是否博客作者
  if (author_id !== currentUID) return res.status(403).send('您不是该博客的作者，无法更改')

  console.log('正在更新id为', id, '的博客')
  update(blogItem).then(result => {
    if (result) return success1(res, '博客已更新')
    return success4(res, '该博客不存在')
  })
})

// 删除指定id的博客
router.delete('/', jsonParser, (req, res) => {
  const currentUID = req['user']._uid
  // const authorIDSet = new Set(req.body["author_ids"])
  const ids = req.query['ids'].split(',')

  // 检查是否为贡献者用户
  if (contributorForbiddenCheck(req, res)) return
  // 检测是否是博客作者
  // if(authorIDSet.size !== 1 && !authorIDSet.has(currentUID))
  //     res.status(403).send('您不能删除作者不是您自己的博客，请确保您要删除的博客的作者是您自己')

  console.log('正在删除id为', ids, '的博客')
  remove(ids, req['user'].role === '管理员' ? null : currentUID).then(result => {
    if (result) return success1(res, '删除成功')
    return success4(res, '删除失败，只有博客作者才能删除')
  })
})

export default router
