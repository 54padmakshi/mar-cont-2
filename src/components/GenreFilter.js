import React from 'react'

function GenreFilter({movies,genreFilter,setall}) {
   let arr= movies.map(movie =>movie.genre) // all genres will be mapped
   let s= new Set(arr); // duplicate names will be removed n returns {Drama, ......}
   let genreArray = [...s] // returns array to mapdown 
   
   
  return (
    <div className='filter'> 
    <h3> Filter By Genre </h3>
    
      <div  className = "gendiv">
       
        {genreArray.map((g)=>(<button onClick={(e)=>{genreFilter(e.target.value)}} value = {g}> 
        
        {g}
        </button>)) }
       <button onClick={setall}>All</button>
    </div>
    
    </div>

  )
}

export default GenreFilter