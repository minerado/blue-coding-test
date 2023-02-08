import { useState } from 'react'

import GifGrid from './components/gif-grid'
import SearchForm from './components/search-form'
import { useGifs } from './hooks/gifs'

const App = () => {
  const [search, setSearch] = useState()
  const { data: gifs, isLoading } = useGifs({ limit: 10, q: search })

  return (
    <div>
      <SearchForm onChange={setSearch} />

      {isLoading ? 'loading' : <GifGrid gifs={gifs.data} search={search} />}

      {/* <div>gif slideshow</div> */}

      {/* <div>history</div> */}
    </div>
  )
}

export default App
