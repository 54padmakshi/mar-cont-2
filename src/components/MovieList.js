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
            {movies.map((movies, index) => (
                  <tr key={index}>
                        <td>{movies.title}</td>
                        <td >{movies.genre}</td>
                        <td>{movies.year}</td>
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