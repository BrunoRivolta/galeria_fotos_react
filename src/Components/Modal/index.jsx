import Button from 'Components/Botao'
import React from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModalOpen, image }) {
    if(isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <img className={styles.foto} src={image.endereco} alt={image.titulo}  />
                    <h2>{image.titulo}</h2>
                    <div className={styles.botaoContainer}>
                        <Button  onClick={setModalOpen}>Fechar</Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}
