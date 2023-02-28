import React from 'react'
import styles from './Navigation.module.scss'
import logo from './logo.png'

export default function Navigation() {
  return (
    <nav>
        <ul className={styles.background}>
            <li><img src={logo} alt="Logo Galeria Rivolta" /></li>
            <li><a href="#">Galeria</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Sobre</a></li>
        </ul>
    </nav>
  )
}
