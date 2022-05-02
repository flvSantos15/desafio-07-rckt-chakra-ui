import { GetPhotoRequest } from "shared/interfaces/request/unsplash"
import { GetPhotoResponseView } from "shared/interfaces/response-views/unsplash"
import { unsplashAPi } from "./unSplashAPi"

export const getPhotosByCity = async ({ city }: GetPhotoRequest) => {
  const endpoint = `/search/photos/?query=${city}`

  return await unsplashAPi.get<GetPhotoResponseView[]>(endpoint)
}
