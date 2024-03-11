import axios from 'axios'

const movieBaseURL = 'https://api.themoviedb.org/3'
const api_key = process.env.TMDB_API

const getTrendingVideos = axios.get(movieBaseURL + '/trending/all/day?api_key=' + api_key)

export default {
    getTrendingVideos
}