import React from 'react'

export default function InputField({ toAlter, label, name, type, placeholder, value }) {

    const toType = (event) => {
        toAlter(event.target.value)
    }

  return (
    <div>
        <label htmlFor={label}>{name}:</label>
        <input 
          id={label}
          type={type} 
          name={label} 
          placeholder={`${placeholder}`}
          required
          onChange={toType} 
          value={value}
        />
    </div>
  )
}
