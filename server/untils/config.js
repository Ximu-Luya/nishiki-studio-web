import yaml from 'js-yaml'
import fs from 'fs'

try {
  let configFile
  // 如果用户自定义配置文件存在，则使用自定义配置文件，否则使用默认config.yml文件
  try {
    configFile = fs.readFileSync('config/custom.config.yml', 'utf8')
  } catch (e) {
    console.log('自定义配置不存在，将使用默认配置文件')
    configFile = fs.readFileSync('config/config.yml', 'utf8')
  }

  global.config = yaml.load(configFile)
} catch (err) {
  err.message = "配置文件读取异常\n" + err.message
  throw err
}
