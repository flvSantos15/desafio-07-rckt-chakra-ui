// import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { getPhotosByCity } from '../shared/services/unSplashService'
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

  useEffect(() => {
    if (city) {
      getPhotosByCity({city}).then((res) => {
        const response = res.data
        setPhotosByCity(response)
      })
    }
  }, [city])

  async function getNameOfCity(city: string){
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
