import yaml from 'js-yaml'
import fs from 'fs'
try {
  const config = yaml.load(fs.readFileSync('config/config.yml', 'utf8'))
  console.log(config)
} catch (e) {
  throw new Error('配置读取失败\n'+e)
}
import app from './server/app.js'

const server = app.listen(8067, 'localhost', function () {
  const { host, port } = server.address()
  console.log('服务器部署部署成功，服务器地址： http://%s:%s', host, port)
})
