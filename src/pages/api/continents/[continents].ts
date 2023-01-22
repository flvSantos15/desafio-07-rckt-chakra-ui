import { NextApiRequest, NextApiResponse } from 'next'

import Continents from '../../../../server.json'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET' && request.query.continents) {
    try {
      const { continents } = request.query

      const { continents: continent } = await Continents

      const continentFound = continent.find((con) => con.id === continents)

      return response.status(200).send(continentFound)
    } catch (error) {
      console.log(error, 'error no handler de continents.ts')
      // if (error.response.status === 400) {
      //   return response.status(400).send(error.response.data)
      // }

      return response.status(500).send(error)
    }
  } else {
    return response.status(405).send({ error: 'Method not allowed' })
  }
}
