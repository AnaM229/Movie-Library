import React from 'react'
import { ComedyMovies } from '../helpers/Movies'
import Movie from '../components/Movie'
import '../styles/movies.css'

export default function Comedy() {
  return (
    <div>
      {ComedyMovies.map((comedyMovie, key) => {
        return <Movie key={key} cover={comedyMovie.cover} name={comedyMovie.name} rating={comedyMovie.rating} preview={comedyMovie.preview} />
      })}
    </div>
  )
}
