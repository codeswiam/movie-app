import React from 'react'

// props are supposed to be read only in child componenets
const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />
            <input 
                type="text" 
                placeholder='Search through thousands of movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search