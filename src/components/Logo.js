import React from 'react'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
        <div className="logo-text">
        PrimeFlix
        </div>
    </Link>
  )
}

export default Logo