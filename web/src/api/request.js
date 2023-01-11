import axios from 'axios'
import Router from '../router/index'
import { ElMessage } from 'element-plus'

// 定义axios请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送数据之前做些什么
    if (config.method !== 'get') {
      // 在headers中新增authorization属性来携带token
      config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    console.log('请求url为：' + config.url, config)
    return config
  },
  err => {
    // 对响应错误做些什么
    ElMessage.error('请求失败')
    return Promise.reject(err)
  }
)

// 定义axios响应拦截器
axios.interceptors.response.use(
  response => {
    // 在收到数据之前做些什么
    const { data, config } = response

    // 控制台输出接收到的响应全部数据
    console.log('响应url为：' + config.url, response)
    // 若返回的事件代码不为200（即不为数据响应而是状态响应）为用户提示后端传来的信息
    switch (data.code) {
      case 200:
        break
      case 201:
      case 202:
      case 203:
        ElMessage.success(data.message)
        break
      case 204:
        ElMessage.warning(data.message)
        break
      default:
        ElMessage.error('响应数据不是规范的数据')
    }
    // 替换响应数据，将具体数据替换到响应的data中
    return data.data
  },
  err => {
    // 对响应错误做些什么

    // 控制台输出错误信息
    console.log(err)
    // 若错误响应不为空即后台已响应并按规范返回了错误信息
    if (err.response) ElMessage.error(err.response.data)
    // 若错误响应为空即后端未进行响应，识别为网络错误
    else ElMessage.error('网络连接错误')

    if (err.response.status === 401) {
      console.log(Vue.prototype)
      Router.push('/login').catch()
      console.log(2)
    }
    return Promise.reject(err)
  }
)

export default axios