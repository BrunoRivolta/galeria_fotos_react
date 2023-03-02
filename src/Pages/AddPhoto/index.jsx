import Banner from 'Components/Banner'
import Button from 'Components/Button'
import React from 'react'
import styles from './AddPhoto.module.scss'

export default function AddPhoto() {
  return (
    <main>
      <Banner />
      <h2 className={styles.title}>Adicine suas fotos</h2>
      <form className={styles.container}>
        <div className={styles.input}>
          <label for="title">Titulo:</label>
          <input type="text" id="tite" />
          <label for="mail">Autor:</label>
          <input type="text" id="mail" />
          <label for="mail">Endereço:</label>
          <input type="text" id="mail" />
          <label for="tag" placeholder=''>Tag:</label>
          <select name="tags" id="tag">
            <option value="Brasil">Brasil</option>
            <option value="Lagos">Lagos</option>
            <option value="Neve">Neve</option>
            <option value="Paisagens">Paisagens</option>
            <option value="PorDoSol">Por do Sol</option>
            <option value="Praia">Praia</option>
          </select>
        </div>
        <div className={styles.button_container}>
          <Button type="submit" textColor={"black"}>Adicionar Foto</Button>
        </div>
      </form>
    </main>
  )
}






