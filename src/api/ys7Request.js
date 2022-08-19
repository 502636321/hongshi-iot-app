import axios from 'axios'

// 创建axios实例
const ys7_request = axios.create({
    // baseURL: 'http://192.168.1.69:5000',
    timeout: 80000, // 请求超时时间
    withCredentials: false
})

// request拦截器
ys7_request.interceptors.request.use(
    async config => {
        // let token = JSON.parse(localStorage.getItem('YS7_ACCESS_TOKEN') || '{}');
        // if (token && token.accessToken && token.expireTime && token.expireTime > Date.now()) {
        //     config.data.append('accessToken', token.accessToken);
        // } else {
        //     await getAccessToken().then(({data}) => {
        //         token = data;
        //         localStorage.setItem('YS7_ACCESS_TOKEN', JSON.stringify(token));
        //         config.data.append('accessToken', token.accessToken);
        //     });
        // }
        return config
    },
    error => {
        Promise.reject(error)
    }
)


export default ys7_request
