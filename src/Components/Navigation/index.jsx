import React from 'react'
import styles from './Navigation.module.scss'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export default function Navigation() {

  return (
    <nav>
        <ul className={styles.background}>
            <li><img src={logo} alt="Logo Galeria Rivolta" /></li>
            <li><Link to={'/'}>Galeria</Link></li>
            <li><Link to={'/favoritos'}>Favoritos</Link></li>
            <li><Link to={'/adicionar'}>Adicionar</Link></li>
        </ul>
    </nav>
  )
}




