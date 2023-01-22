import axios from 'axios'
import { ContinentResponse, CityResponse } from '../interfaces/models/Continent'

export const getAllContinentsResponse = async () => {
  return await axios.get<ContinentResponse[]>('/api/continents')
}

export const getAllCitiesResponse = async () => {
  return await axios.get<CityResponse[]>('/api/cities')
}
