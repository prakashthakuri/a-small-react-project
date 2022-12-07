import React from 'react'

export default function Input({placeholder, value, inputOnChange}) {

  return (
    <div>
        <input 
            type="text"
            placeholder={placeholder}
            onChange = {inputOnChange}
            value={value}
          

            />



    </div>
  )
}
