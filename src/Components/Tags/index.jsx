import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({tags, filter, setItens, image}) {
  return (
    <div className={styles.container}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags_container}>
        {tags.map(tag => {
          return (
            <li key={tag} onClick={() => filter(tag)} >{tag}</li>
          )
        })}
        <li onClick={() => setItens(image)}>Todas</li>
      </ul>
    </div>
  )
}