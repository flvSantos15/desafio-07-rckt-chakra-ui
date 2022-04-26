import axios from 'axios'

export const unsplashAPi = axios.create({
  baseURL: `https://api.unsplash.com/photos/?client_id=${process.env.YOUR_ACCESS_KEY}`,
  // headers: {
  //   'Authorization': `Client-ID ${process.env.ACCESS_KEY}`
  // }
})