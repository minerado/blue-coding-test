import React from 'react'
import Box from 'ui-box'

const SearchForm = ({ onChange }) => {
  return <Box is="input" onChange={(e) => onChange && onChange(e.target.value)} />
}

export default SearchForm
