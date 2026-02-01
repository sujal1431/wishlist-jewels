import React from 'react'
import logo from '../assets/react.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className='left-section'>
            <img src = {logo}></img>
            <div>Roundtrip</div>
            <div>One-way</div>
            <div>Multi-city</div>
        </div>

        <div className='middle-section'></div>
        <div className='right-section'>
        <div>BUSINESS</div>
            <div>TRIPS</div>
            <div>SIGN-IN</div>
        </div>

    </div>
  )
}

export default Header