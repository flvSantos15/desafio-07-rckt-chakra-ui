// import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  getAllContinentsResponse,
  getAllCitiesResponse
} from '../shared/services/ContinentService'
import {
  ContinentResponse,
  CityResponse
} from '../shared/interfaces/models/Continent'
interface ContinentContextData {
  continent: string
  allContinent: ContinentResponse[]
  allCities: CityResponse[]
  getContinent: (slug: string) => Promise<void>
}

interface ContinentProviderProps {
  children: ReactNode
}

export const ContinentContext = createContext({} as ContinentContextData)

export function ContinentProvider({ children }: ContinentProviderProps) {
  const [allContinent, setAllContinent] = useState<ContinentResponse[]>([])
  const [allCities, setAllCities] = useState<CityResponse[]>([])
  const [continent, setContinent] = useState('')

  useEffect(() => {
    getAllContinentsResponse().then((res) => {
      const response = res.data
      setAllContinent(response)
    })

    getAllCitiesResponse().then((res) => {
      const response = res.data
      setAllCities(response)
    })
  }, [])

  async function getContinent(slug: string) {
    setContinent(slug)
  }

  return (
    <>
      <ContinentContext.Provider
        value={{
          allContinent,
          allCities,
          continent,
          getContinent
        }}
      >
        {children}
      </ContinentContext.Provider>
    </>
  )
}

export const useContinent = () => {
  return useContext(ContinentContext)
}
