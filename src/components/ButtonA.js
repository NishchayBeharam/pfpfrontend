import React from 'react'
import { Link } from 'react-router-dom'

const ButtonA = ({text,link}) => {
  return (
    <Link to={link} className="button-a"> {text} </Link>
  )
}

export default ButtonA