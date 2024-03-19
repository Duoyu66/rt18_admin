import axios from 'axios'
const requests = axios.create({
    baseURL:'/',
    timeout:5000
})
//配置请求拦截器
requests.interceptors.request.use(config=>{
    return config;
})
//配置相应拦截器
requests.interceptors.response.use(res=>{
    return res.data
},(error)=>{
    console.log("响应失败",error)
    return Promise.reject(new Error('fail'))
})
export default requests
