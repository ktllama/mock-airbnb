import React from 'react'
import airbnblogo from '../images/airbnb-logo.png'

export const Nav = () => {
  return (
    <nav>
        <img src={airbnblogo} alt="airbnb logo" className='nav--logo' />
    </nav>
  )
}
