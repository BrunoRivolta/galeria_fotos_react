import { FaRegHeart, FaTrash } from 'react-icons/fa';
import { BiCamera } from 'react-icons/bi';
import React from 'react'
import styles from './Card.module.scss'

export default function Card({ foto }) {
  return (
    <div className={styles.card}>
        <img src={foto.endereco} alt={foto.titulo} />
        <div className={styles.text_container}>
            <h3>{foto.titulo}</h3>
            <p><BiCamera /> {foto.autor}</p>
            <p className={styles.tag}>{foto.tag}</p>
        </div>
        <div className={styles.icon_container}>
            <FaTrash className={styles.icon} />
            <FaRegHeart className={styles.icon} />
        </div>
    </div>
  )
}
