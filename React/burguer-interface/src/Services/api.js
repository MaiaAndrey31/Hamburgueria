import axios from 'axios'

const apiBurguer = axios.create({
    baseURL: 'http://localhost:3001'
})

apiBurguer.interceptors.request.use(async config => {

     const userData = await localStorage.getItem('burger:userInfo')

     console.log(userData)
})

export default apiBurguer