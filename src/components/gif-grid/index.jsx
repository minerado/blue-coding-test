import React from 'react'
import Box from 'ui-box'

const GifGrid = ({ gifs = [] }) => {
  console.log(gifs)

  return (
    <Box display="grid" gap={16} gridTemplateColumns="repeat(3, minmax(100px, 200px))">
      {gifs.map((gif) => (
        <Box key={gif.id} is="img" src={gif.images.fixed_height.url} />
      ))}
    </Box>
  )
}

export default GifGrid
