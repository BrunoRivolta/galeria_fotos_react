import CloseButton from 'Components/CloseButton'
import { FaDownload } from 'react-icons/fa'
import React from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModalOpen, image }) {
    if(isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <CloseButton className={styles.close} onClick={setModalOpen}/>
                    <img className={styles.foto} src={image.endereco} alt={image.titulo}  />
                    <div className={styles.info}>
                        <h2>{image.titulo}</h2>
                        <a href={image.endereco} download><FaDownload className={styles.icon} /></a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}
