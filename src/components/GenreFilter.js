import React from 'react'

function GenreFilter({genres, onGenreSelect}) {
   
   
   
  return (
    <div className='filter'> 
    <h3> Filter By Genre </h3>
    <div  className = "gendiv">
      {genres.map((genre) => (
        <button key={genre} onClick={() => onGenreSelect(genre)}>
            {genre}
          </button>
        ))}
    </div>
    
    </div>

  )
}

export default GenreFilter