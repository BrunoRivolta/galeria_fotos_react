import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({tags, filter, setItens, image}) {
  return (
    <div className={styles.container}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags_container}>
        {tags.map((tag, index) => {
          return (
            <li key={index} onClick={() => filter(tag)} >{tag}</li>
          )
        })}
        <li onClick={() => setItens(image)}>Todas</li>
      </ul>
    </div>
  )
}