import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React from 'react'
import styles from './Favorites.module.scss'
import bd from 'bd.json'

export default function Favorites() {
  return (
    <section className={styles.container}>
      <Banner />
      <h2 className={styles.titulo_galeria}>Fotos Favoritas</h2>
      <section className={styles.galeria}>
        {bd.map(foto => {
          return <Card key={foto.id} foto={foto}/>
        })}
      </section> 
    </section>
  )
}
