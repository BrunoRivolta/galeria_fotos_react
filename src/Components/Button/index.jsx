import React from 'react'
import style from './Button.module.scss'

export default function Button({children, onClick, textColor= "white"}) {
  return (
    <button onClick={onClick} className={style.botao} style={{"color": textColor}}>{children}</button>
  )
}