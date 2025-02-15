import { ContinentResponse, CityResponse } from '../interfaces/models/Continent'
import { api } from './api'

export const getAllContinentsService = async () => {
  const response = await api.get<ContinentResponse[]>('/api/continents')
  return response.data
}

export const getAllCitiesService = async () => {
  const response = await api.get<CityResponse[]>('/api/cities')
  return response.data
}
