import { GetPhotoRequest } from '../interfaces/request/unsplash'
import { GetPhotoResponseView } from '../interfaces/response-views/unsplash'
import { unsplashAPi } from './unSplashAPi'

export const getPhotosByCityService = async ({ city }: GetPhotoRequest) => {
  const endpoint = `/search/photos/?query=${city}`

  const response = await unsplashAPi.get<GetPhotoResponseView[]>(endpoint)
  return response.data
}
