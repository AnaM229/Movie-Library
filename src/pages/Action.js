import React from 'react'
import { ActionMovies } from '../helpers/Movies'
import Movie from '../components/Movie'
import '../styles/movies.css'

export default function Action() {
  return (
    <div>
      {ActionMovies.map((actionMovie, key) => {
        return <Movie key={key} cover={actionMovie.cover} name={actionMovie.name} rating={actionMovie.rating} preview={actionMovie.preview} />
      })}
    </div>
  )
}
