const axios = require('axios')

axios.interceptors.request.use((config)=>{
    // 请求前做些什么
    return config
}, (error)=>{
    // 请求错误做些什么
    return Promise.reject(error);
})

axios.interceptors.response.use((response)=>{
    // 对响应数据做点什么
    return response
}, (error)=>{
    // 请求错误做些什么
    return error
})
export default function(){
    return new Promise((resolve, reject)=>{
        axios({})
        .then( response => {
            console.log(response)
            resolve(response)
        })
        .catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


