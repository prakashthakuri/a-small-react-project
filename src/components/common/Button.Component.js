import React from 'react'

export default function Button({handleClick, label}) {
  return (

     <button 
        type="button"
        onClick={handleClick}>
            {label}
        </button>

   


  )
}
