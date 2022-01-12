import axios from 'axios'

class Youtube {
    constructor(key) {
        this.ApiInstance = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            timeout: 2000,
            params: {
                key
            }
        })
    }

    async mostPopular () {
        const resposne = await this.ApiInstance.get('search', {
            params: {
                part: 'snippet',
                chart: 'mostpopular',
                type: 'video',
                maxResults: 25
            }
        })
        return resposne.data.items || []
    }

    async search(query) {
        const response = await this.ApiInstance.get('search', {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: 25
            }
        })
        return response.data.items || []
    }
}

export default Youtube