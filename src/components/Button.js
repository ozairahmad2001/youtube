import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-100 rounded-lg p-1 mx-1.5 my-1 cursor-pointer' >
        {name}
    </div>
  )
}

export default Button