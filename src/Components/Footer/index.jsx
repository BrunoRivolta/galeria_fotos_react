import React from 'react'
import styles from './Footer.module.scss'
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <FaFacebookSquare className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaTwitterSquare className={styles.icon} />
      </section>
        <p>Bruno Rivolta - Todos direitos reservados</p>
    </footer>
  )
}
