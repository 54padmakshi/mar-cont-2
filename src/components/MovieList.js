import React from 'react'
import './MovieList.css'

function MovieList({ movies }) {
     
  return (
    <div>
    <div className='table'>
        <table>
         <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
         </thead> 
         <tbody>
            <tr>
            {movies.map((movie, index) => (
                  <tr key={index}>
                        <td>{movie.title}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.year}</td>
                   </tr>
                 ))}
            </tr>
         </tbody>
        </table>
        </div>
    </div>
  )
}

export default MovieList