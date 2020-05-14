import axios from 'axios'; // o axios vai fazer a chamada a API(backend)

const api = axios.create({
    baseURL: 'http://localhost:3333',
})


export default api;