import axios from 'axios'

const API_KEY = 'jTAuqirruj85Vtd9DISWXopoSqNOHRUG'

const http = axios.create({
  baseURL: 'https://api.giphy.com/v1',
  params: { api_key: API_KEY },
})

export const searchGifs = async (params) => {
  const { data } = await http.get('/gifs/search', { params })

  return data
}
