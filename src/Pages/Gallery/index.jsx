import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React, { useState } from 'react'
import styles from './Gallery.module.scss'
import bd from 'bd.json'
import Tags from 'Components/Tags'

export default function Gallery() {

  const [setItens] = useState(bd)
  const tags = [...new Set(bd.map(valor => valor.tag))]

  const filtraFotos = tag => {
    const novasFotos = bd.filter(foto => {
      return foto.tag === tag
    })
    setItens(novasFotos)
  }

  return (
    <section className={styles.container}>
      <Banner />
      <h2 className={styles.titulo_galeria}>Galeria de Fotos</h2>
      <Tags tags={tags} filter={filtraFotos} setItens={setItens} />
      <section className={styles.galeria}>
        {bd.map(foto => {
          return <Card key={foto.id} foto={foto}/>
        })}
      </section> 
    </section>
  )
}


