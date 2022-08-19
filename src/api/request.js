import axios from 'axios'
// import store from '@/store'
// import storage from 'store'
// import notification from 'ant-design-vue/es/notification'

// import { ACCESS_TOKEN } from '@/store/mutation-types'

import router from "@/router";

const VueAxios = {
  vm: {},
  // eslint-disable-next-line no-unused-vars
  install (Vue, instance) {
    Vue.axios = instance

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get () {
          return instance
        }
      },
      $http: {
        get: function get () {
          return instance
        }
      }
    })
  }
}

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
  withCredentials: false
})

// 异常拦截处理器
const errorHandler = (error) => {
  // if (error.response) {
  //   const data = error.response.data
  //   // 从 localstorage 获取 token
  //   const token = storage.get(ACCESS_TOKEN)
  //   if (error.response.status === 403) {
  //     notification.error({
  //       message: 'Forbidden',
  //       description: data.message
  //     })
  //   }
  //   if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
  //     notification.error({
  //       message: 'Unauthorized',
  //       description: 'Authorization verification failed'
  //     })
  //     if (token) {
  //       store.dispatch('Logout').then(() => {
  //         setTimeout(() => {
  //           window.location.reload()
  //         }, 1500)
  //       })
  //     }
  //   }
  // }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  // const token = storage.get(ACCESS_TOKEN)
  // // 如果 token 存在
  // // 让每个请求携带自定义 token 请根据实际情况自行修改
  // if (token) {
  //   config.headers['Access-Token'] = token
  // }
  const token = window.localStorage.getItem("SESSION_ACCESS_TOKEN"); //存储访问access_token

  if (token) {
    config.headers['X-Access-Token'] = '8355fc091983795c44e17b1fde11dd76';
    return config;
  } else {
    router.push({
      path: '/login'
    })
  }
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)


export default request

export {
  VueAxios,
  request as axios
}
