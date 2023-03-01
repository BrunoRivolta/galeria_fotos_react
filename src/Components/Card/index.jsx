import { FaRegHeart, FaTrash, FaHeart } from 'react-icons/fa';
import { BiCamera } from 'react-icons/bi';
import React from 'react'
import styles from './Card.module.scss'
import { useFavoriteContext } from 'Common/Context/favorites';

export default function Card({ foto }) {
  
  const { favorite, addFavorite } = useFavoriteContext()
  const favorited = favorite.some(fav => fav.id === foto.id)
  const icon = !favorited ? <FaRegHeart className={styles.icon} onClick={() => addFavorite(foto)} /> : <FaHeart className={styles.icon_red} onClick={() => addFavorite(foto)} />

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
            {icon}
        </div>
    </div>
  )
}

/*
import { useFavoritoContext } from 'contextos/Favoritos'
import React from 'react'
import styles from './Card.module.scss'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {

  const {favorito, adicionarFavorito} = useFavoritoContext()
  const souFavorito = favorito.some(fav => fav.id === id)
  const icone = !souFavorito ? iconeFavoritar : iconeDesfavoritar

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img 
        src={icone} 
        alt="Favoritar Filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa })
        }}
      />
    </div>
  )
}
*/
