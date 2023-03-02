import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React, { useEffect, useState } from 'react'
import styles from './Gallery.module.scss'
import Tags from 'Components/Tags'

export default function Gallery() { 

  const address = "https://6400686f29deaba5cb36bf60.mockapi.io/rivolta/galeria"
  
  const [image, setImage] = useState([])
  
  useEffect(() => {
    fetch(address)
      .then(res => res.json())
      .then(item => setImage(item))
    }, [])

  const [setItens] = useState(image)
  const tags = [...new Set(image.map(valor => valor.tag))]

  const filtraFotos = tag => {
    const novasFotos = image.filter(foto => {
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
        {image.map(foto => {
          return <Card key={foto.id} foto={foto}/>
        })}
      </section> 
    </section>
  )
}


