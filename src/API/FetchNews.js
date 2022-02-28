import axios from 'axios';

const Fetch_News_API = axios.create({
    baseURL:"https://newsapi.org/v2/top-headlines"
})
export default Fetch_News_API;