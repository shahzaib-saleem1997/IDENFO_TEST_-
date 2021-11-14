import axios from 'axios';

export default {
    baseURL: 'http://localhost:3000',
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}