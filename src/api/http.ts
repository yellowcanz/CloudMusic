import axios, { AxiosRequestConfig, Method } from 'axios'

// const server = axios.create({
//     baseURL:'http://localhost:3000',
//     timeout: 3000,
//     withCredentials: true //重要
// })

axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use((config: AxiosRequestConfig | any) => config)

axios.interceptors.response.use(response => {
    return response
}, err => {
    return Promise.reject(err)
})


interface HTTP {
    get<T>(url: string, params?: any): Promise<T>;
}

const http: HTTP = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}


// type Data<T> = {
//     code:number,
//     message:string,
//     data:T
// }

// const http = <T>(url:string,method:Method = 'get',submitdata:object,params:AxiosRequestConfig) =>{
//     return server.request<T,Data<T>>({
//      url,
//      method,
//      [method.toLowerCase() === 'get' ? 'params':'data']:submitdata,
//      ...params
//     })
// }

export default http

