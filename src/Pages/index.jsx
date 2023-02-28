import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
  return (
    <>
        <Navigation />
        <div className={styles.background}>PaginaInicial</div>
        <Footer />
    </>
  )
}
