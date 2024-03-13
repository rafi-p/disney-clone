import axios from 'axios'

const movieBaseURL = 'https://api.themoviedb.org/3'
const api_key = import.meta.env.VITE_TMDB_API

const getTrendingVideos = axios.get(movieBaseURL + '/trending/all/day?api_key=' + api_key)

export default {
    getTrendingVideos
}