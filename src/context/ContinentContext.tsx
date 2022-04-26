import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { getContinentResponse } from '../shared/services/ContinentService'
import { ContinentResponse } from '../shared/interfaces/models/Continent'


interface ContinentContextData {
  allContinent: ContinentResponse[] | undefined
  getContinent: (continent: ContinentResponse[]) => Promise<void>
}

interface ContinentProviderProps {
  children: ReactNode
}

export const ContinentContext = createContext({} as ContinentContextData)


export function ContinentProvider({ children }: ContinentProviderProps) {
  const [allContinent, setAllContinent] = useState<ContinentResponse[]>([])

  // useEffect(() => {
  //   getContinentResponse(id).then(res => {
  //     const response = res.data
  //     console.log(response)
  //   })
  // }, [])

  async function getContinent(continent: ContinentResponse[]) {
    setAllContinent(continent)
  }

  return (
    <>
      <ContinentContext.Provider value={{ allContinent, getContinent }}>
        {children}
      </ContinentContext.Provider>
    </>
  )
}

export const useContinent = () => {
  return useContext(ContinentContext)
}
