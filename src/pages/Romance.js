import React from 'react'
import { RomanticMovies } from '../helpers/Movies'
import Movie from '../components/Movie'
import '../styles/movies.css'

export default function Romance() {
  return (
    <div>
      {RomanticMovies.map((romanticMovie, key) => {
        return <Movie key={key} cover={romanticMovie.cover} name={romanticMovie.name} rating={romanticMovie.rating} />
      })}
    </div>
  )
}
