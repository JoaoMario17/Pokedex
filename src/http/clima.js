import axios from 'axios'

const climaapi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',

    data: {
        api_key: 'd35e9702b47cb4bf09864e6f0baa4da5',
        busca: '',
        clima: {}
    }
})

export default climaapi;