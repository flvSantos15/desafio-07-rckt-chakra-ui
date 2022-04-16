import axios from 'axios'

export const unsplashAPi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Authorization': `Client-ID ${process.env.ACCESS_KEY}`
  }
})