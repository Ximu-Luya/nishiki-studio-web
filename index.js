import './server/config-load.js'
import app from './server/app.js'

const { port, host } = global.config.server
app.listen(port, host, function () {
  console.log('服务器部署部署成功，配置的服务器地址： http://%s:%s', host, port)
})
