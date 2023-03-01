import React from 'react'
import style from './Botao.module.scss'

export default function Button({children, onClick}) {
  return (
    <button onClick={onClick} className={style.botao}>{children}</button>
  )
}