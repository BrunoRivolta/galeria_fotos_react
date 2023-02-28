import { FaRegHeart, FaTrash } from 'react-icons/fa';
import React from 'react'
//import bd from '../../bd.json'
import style from './Card.module.scss'


export default function Card() {
  return (
    <div className={style.card}>
        <img src='/assets/fotos/brasil1.webp' alt="" />
        <div className={style.text_container}>
            <h3>Titulo</h3>
            <p>Foto tirada daqui mesmo</p>
            <p>Autor</p>
        </div>
        <div className={style.icon_container}>
            <FaTrash className={style.icon} />
            <FaRegHeart className={style.icon} />
        </div>
    </div>
  )
}
