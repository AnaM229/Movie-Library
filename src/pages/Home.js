import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 id='greet'>Choose your type!</h1>
      <Link className='genre' to='/romance'>Romance</Link>
      <Link className='genre' to='/comedy'>Comedy</Link>
      <Link className='genre' to='/action'>Action</Link>
    </div>
  )
}
