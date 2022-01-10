import axios from 'axios'

const ApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeout: 2000
})

export default ApiInstance