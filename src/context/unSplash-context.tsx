// import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { getPhotosByCityService } from '../shared/services/unSplash-service'
import { GetPhotoResponseView } from '../shared/interfaces/response-views/unsplash'

interface UnSplashContextData {
  photosByCity: GetPhotoResponseView[]
  getNameOfCity: (city: string) => Promise<void>
}

interface UnSplashProviderProps {
  children: ReactNode
}

export const UnSplashContext = createContext({} as UnSplashContextData)

export function UnSplashProvider({ children }: UnSplashProviderProps) {
  const [photosByCity, setPhotosByCity] = useState<GetPhotoResponseView[]>([])
  const [city, setCity] = useState('')

  async function getPhotosByCity() {
    const photos = await getPhotosByCityService({ city })

    setPhotosByCity(photos)
  }

  useEffect(() => {
    if (city) {
      getPhotosByCity()
    }
  }, [city])

  async function getNameOfCity(city: string) {
    setCity(city)
  }

  return (
    <UnSplashContext.Provider value={{ getNameOfCity, photosByCity }}>
      {children}
    </UnSplashContext.Provider>
  )
}

export const useUnSplash = () => {
  return useContext(UnSplashContext)
}
