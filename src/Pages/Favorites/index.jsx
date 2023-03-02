import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React from 'react'
import styles from './Favorites.module.scss'
import { useFavoriteContext } from 'Common/Context/favorites'

export default function Favorites() {

  const { favorite } = useFavoriteContext()

  return (
    <section className={styles.container}>
      <Banner />
      <h2 className={styles.titulo_galeria}>Fotos Favoritas</h2>
      <section className={styles.galeria}>
        {favorite.map(photo => {
          return <Card key={photo.id} photo={photo}/>
        })}
      </section> 
    </section>
  )
}
