import { ContinentsProps, ContinentResponse, CityResponse } from '../interfaces/models/Continent'
import { api } from './api'
// import { unsplashAPi } from './unSplashAPi'

export const getAllContinentsResponse = async () => {
  const endpoint = `/continents/`

  return await api.get<ContinentResponse[]>(endpoint)
}

export const getContinentBySlugResponse = async (slug: string) => {
  const endpoint = `/continents/${slug}`

  return await api.get<ContinentsProps>(endpoint)
}

export const getAllCitiesResponse = async () => {
  const endpoint = `/cities/`

  return await api.get<CityResponse[]>(endpoint)
}

export const getCityBySlugResponse = async (slug: string) => {
  const endpoint = `/cities/${slug}`

  return await api.get<ContinentsProps>(endpoint)
}
