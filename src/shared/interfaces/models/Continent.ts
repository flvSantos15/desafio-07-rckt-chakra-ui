export interface Continent {
  continents: {
    slug: string
    title: string
    summary: string
    image: string
  }[]
}

export interface ContinentResponse {
  id: string;
  title: string;
  description: string;
  image: string;
  betterImagePosition: string;
  bio?: string;
  countries?: number;
  cities?: number;
  languages?: number;
}

export interface City {
  id?: number;
  name: string;
  country: string;
  flag?: string;
  continent?: string;
  image?: string;
}

export interface ContinentsProps {
  continent: ContinentResponse;
  cities: City[];
}

export interface ContinentProps {
  continent: {
    slug: string
    title: string
    description: string
    banner_image: string
    countries: string
    languages: number
    cities: number
    cities_list: string
    cities100: {
      city: string
      country: string
      thumbnail: string
      flag: string
    }[]
  }
}
