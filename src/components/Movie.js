import React from 'react'

export default function Movie({name, cover, rating}) {
  return (
    <div className='movie'>
      <div id='image'><img src={cover}></img></div>
      <div id='info'>
        <h2>{name}</h2>
        <p>{rating}</p>
      </div>
    </div>
  )
}
