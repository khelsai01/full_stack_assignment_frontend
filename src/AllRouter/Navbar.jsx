import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Link to="/">Home</Link>
        <Link to="/notepost">Note Add</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>

    </div>
  )
}

export default Navbar