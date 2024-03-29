import React from 'react'

const Button = ({action, isActive}) => {
  return (
    <button className='btn-card' onClick={action}>Change {isActive?' fahrenheit °F':' celsius ℃'}</button>
  )
}

export default Button