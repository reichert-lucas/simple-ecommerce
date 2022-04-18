import axios from 'axios'

let apiUrl = 'https://fakestoreapi.com/'

const api = axios.create({
    baseURL: apiUrl, // base url
    headers: {
        "Content-Type": "application/json",
    },    
});

export { api }