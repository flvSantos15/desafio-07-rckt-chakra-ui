import axios from 'axios'

const id = 'numeroencriptado'

export const unsplashAPi = axios.create({
  baseURL: `https://api.unsplash.com/`,
  // headers: {
  //   'Authorization': `Client-ID ${process.env.ACCESS_KEY}`
  // }
  headers: {
    'Authorization': `Client-ID ${id}`
  }
})