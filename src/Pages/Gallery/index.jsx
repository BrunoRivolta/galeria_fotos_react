import Banner from 'Components/Banner'
import Card from 'Components/Card'
import React, { useContext, useEffect, useState } from 'react'
import styles from './Gallery.module.scss'
import Tags from 'Components/Tags'
import { AddPhotosContext } from 'Common/Context/addPhoto'

export default function Gallery() { 

  const address = "https://6400686f29deaba5cb36bf60.mockapi.io/rivolta/galeria"
  
  useEffect(() => {
    fetch(address)
    .then(res => res.json())
    .then(item => {
      setImage(photos.concat(item))
      setImageTags(photos.concat(item))
    })
  }, [])
  
  const [image, setImage] = useState([])
  const [imageTag, setImageTags] = useState([])
  const { photos } = useContext(AddPhotosContext)

  const tagsList = [...new Set(image.map(value => value.tag))]

  const filtersPhotos = (tag) => {
    const newPhotos = image.filter(photo => {
      return photo.tag === tag
    })
    setImageTags(newPhotos)
  }

  return (
    <section className={styles.container}>
      <Banner />
      <h2 className={styles.title}>Galeria de Fotos</h2>
      <Tags tags={tagsList} filter={filtersPhotos} setItens={setImageTags} image={image}/>
      <section className={styles.gallery}>
        {imageTag.map(photo => (
          <Card key={photo.id} photo={photo}/>
        ))}
      </section> 
    </section>
  )
}


