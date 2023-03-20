import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = () => {

    const id = useParams().id;

    

  return (
    <div>SearchResults for {id}</div>
  )
}

export default SearchResults