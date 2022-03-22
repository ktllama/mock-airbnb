import React from 'react'
import photogrid from '../images/photo-grid.png'

export const Hero = () => {
  return (
    <section className='hero'>
        <img src={photogrid} alt="hero photos" className='photogrid' />
        <h1 className='hero-header'>Online Experience</h1>
        <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
