import { FaRegWindowClose } from 'react-icons/fa';
import styles from './CloseButton.module.scss'
import React from 'react'

export default function CloseButton({ onClick }) {
  return (
    <div className={styles.close_container}>
        <FaRegWindowClose className={styles.close} onClick={onClick}/>
    </div>
  )
}
