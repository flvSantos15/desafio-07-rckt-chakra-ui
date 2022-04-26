import { ContinentsProps, ContinentResponse } from '../interfaces/models/Continent'
import { api } from './api'
import { unsplashAPi } from './unSplashAPi'

export const getContinentResponse = ({ id }) => {
  const endpoint = '/'

  return api.get<ContinentsProps>(endpoint, id)
}
