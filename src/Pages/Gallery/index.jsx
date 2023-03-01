import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React from 'react'
import styles from './Gallery.module.scss'
import bd from 'bd.json'

export default function Gallery() {
  return (
    <section className={styles.container}>
      <Banner />
      <h2 className={styles.titulo_galeria}>Galeria de Fotos</h2>
      <section className={styles.galeria}>
        {bd.map(foto => {
          return <Card key={foto.id} foto={foto}/>
        })}
      </section> 
    </section>
  )
}
