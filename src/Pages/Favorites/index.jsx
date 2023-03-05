import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React from 'react'
import styles from './Favorites.module.scss'
import { useFavoriteContext } from 'Common/Context/favorites'
import { BsCardImage } from 'react-icons/bs';

export default function Favorites() {

  const { favorite } = useFavoriteContext()
  
  const a = favorite.length === 0 ? "block" : "none"

  return (
    <section className={styles.container}>
      <Banner />
      <h2 className={styles.title}>Fotos Favoritas</h2>
      <section className={styles.empty} style={{display: `${a}`}}>
        <h2>Sem favoritos para exibir no momento!</h2>
        <p>Vá para a galeria e click nos icones de coração para adicionar aos favoritos.</p>
        <BsCardImage className={styles.background} />
      </section>
      <section className={styles.gallery}>
        {favorite.map(photo => {
            return <Card key={photo.id} photo={photo} />
          })
        }
      </section> 
    </section>
  )
}
