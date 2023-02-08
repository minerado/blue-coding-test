import { useQuery } from 'react-query'

import { searchGifs } from '../api'

export const useGifs = (params) => useQuery(['gifs', params], () => searchGifs(params))
