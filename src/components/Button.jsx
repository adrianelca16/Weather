import React from 'react'

const Button = ({action, isActive}) => {
  return (
    <button className='btn-card' onClick={action}>Change {isActive?'degrees °F':'degrees ℃'}</button>
  )
}

export default Button