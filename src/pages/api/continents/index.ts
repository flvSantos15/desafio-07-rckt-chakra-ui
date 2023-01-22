import { NextApiRequest, NextApiResponse } from 'next'

import Continents from '../../../../server.json'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET') {
    try {
      const { continents } = await Continents

      return response.status(200).send(continents)
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
