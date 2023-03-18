import axios from 'axios'

let request = axios.create({
    baseURL:'http://172.23.118.0:8080',
    timeout:20000,
})

export default request