import Banner from 'Components/Banner'
import React from 'react'
import styles from './Gallery.module.scss'

export default function Gallery() {
  return (
    <>
      <Banner />
      <div className={styles.background}>Page</div>
    </>
  )
}
