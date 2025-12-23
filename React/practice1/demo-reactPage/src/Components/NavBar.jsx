import React from 'react'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1>Horizon Courts</h1>
      <div className="nav-links">
        <button>About Us</button>
        <a href="#" target="_blank">Services</a>
        <a href="#" target="_blank">Coaches</a>
        <a href="#" target="_blank">Events</a>
        <a href="#" target="_blank">Contacts</a>
      </div>
      <button className='book'>Book Now</button>
    </div>
  )
}

export default NavBar