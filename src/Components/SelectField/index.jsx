import React from 'react'

export default function SelectField({ tagsList, label, name, toAlter }) {

    const toType = (event) => {
        toAlter(event.target.value)
    }

  return (
    <div>
        <label htmlFor={label} >{name}:</label>
        <select 
            id={label} 
            onChange={toType} 
            required 
        >
            {tagsList.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
            })}
        </select>
    </div>
  )
}
