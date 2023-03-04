import { FaRegHeart, FaDownload, FaHeart } from 'react-icons/fa'
import { MdOutlineOpenInFull } from 'react-icons/md'
import { BiCamera } from 'react-icons/bi'
import React, { useState } from 'react'
import styles from './Card.module.scss'
import { useFavoriteContext } from 'Common/Context/favorites'
import Modal from 'Components/Modal'

export default function Card({ photo }) {

  const [openModal, setModal] = useState(false)
  const [imagem, setImagem]= useState()
  
  const { favorite, addFavorite } = useFavoriteContext()
  const favorited = favorite.some(fav => fav.id === photo.id)
  const icon = !favorited 
    ? <FaRegHeart className={styles.icon} onClick={() => addFavorite(photo)} /> 
    : <FaHeart className={styles.icon_red} onClick={() => addFavorite(photo)} />

  return (
    <div className={styles.card}>
        <img 
          src={photo.endereco} 
          alt={photo.titulo}               
          onClick={() => {
            setImagem(photo)
            setModal(true)
          }}/>
        <div className={styles.text_container}>
            <h3>{photo.titulo}</h3>
            <p><BiCamera /> {photo.autor}</p>
            <p className={styles.tag}>{photo.tag}</p>
        </div>
        <div className={styles.icon_container}>
          <MdOutlineOpenInFull 
            className={styles.icon}           
            onClick={() => {
            setImagem(photo)
            setModal(true)}}
          /> 
          <a href={photo.endereco} download><FaDownload className={styles.icon} /></a>
            {icon}
        </div>
        <Modal isOpen={openModal} setModalOpen={() => setModal(!openModal)} image={imagem} />
    </div>
  )
}
