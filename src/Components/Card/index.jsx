import { FaRegHeart, FaTrash, FaHeart } from 'react-icons/fa';
import { BiCamera } from 'react-icons/bi';
import React, { useState } from 'react'
import styles from './Card.module.scss'
import { useFavoriteContext } from 'Common/Context/favorites';
import Modal from 'Components/Modal';

export default function Card({ foto }) {

  const [openModal, setModal] = useState(false)
  const [imagem, setImagem]= useState()
  
  const { favorite, addFavorite } = useFavoriteContext()
  const favorited = favorite.some(fav => fav.id === foto.id)
  const icon = !favorited 
    ? <FaRegHeart className={styles.icon} onClick={() => addFavorite(foto)} /> 
    : <FaHeart className={styles.icon_red} onClick={() => addFavorite(foto)} />

  return (
    <div className={styles.card}>
        <img 
          src={foto.endereco} 
          alt={foto.titulo}               
          onClick={() => {
            setImagem(foto)
            setModal(true)
          }}/>
        <div className={styles.text_container}>
            <h3>{foto.titulo}</h3>
            <p><BiCamera /> {foto.autor}</p>
            <p className={styles.tag}>{foto.tag}</p>
        </div>
        <div className={styles.icon_container}>
            <FaTrash className={styles.icon} />
            {icon}
        </div>
        <Modal isOpen={openModal} setModalOpen={() => setModal(!openModal)} image={imagem} />
    </div>
  )
}
