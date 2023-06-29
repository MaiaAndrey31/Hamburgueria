import axios from 'axios'

const apiBurguer = axios.create({
    baseURL: 'http://localhost:3001'
})

export default apiBurguer