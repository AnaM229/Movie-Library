import React, { useState } from 'react'

export default function Movie({name, cover, rating, preview}) {
  const [details, setDetails] = useState()
  function handleClick(){
    if(!details){
      setDetails(preview)
    }
      if(details===preview)
      setDetails()
  }
  return (
    <div className={details?'movie-info':'movie'}>
      <div id='image'><img src={cover}></img></div>
      <div id='info' onClick={handleClick}>
        <h2>{name}</h2>
        <p>{rating}</p>
        <p>{details}</p>
      </div>
    </div>
  )
}
