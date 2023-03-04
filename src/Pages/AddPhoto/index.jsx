import Banner from 'Components/Banner'
import Button from 'Components/Button'
import React from 'react'
import styles from './AddPhoto.module.scss'
import { AiOutlineTable, AiOutlinePicture } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

export default function AddPhoto() {  
  return (
    <main>
      <Banner />
      <h2 className={styles.title}>Adicine suas fotos</h2>
      <form className={styles.container}>
        <div className={styles.input}>
          <section className={styles.icon_container}>
            <AiOutlinePicture className={styles.icons}/>
            <BsArrowRightShort className={styles.icons}/>
            <AiOutlineTable className={styles.icons}/>
          </section>
          <label htmlFor="title">Titulo:</label>
          <input 
            id='title'
            type="text" 
            name="title" 
            placeholder='Titulo da foto'
            required
          />
          <label htmlFor="author">Autor:</label>
          <input 
            id='author'
            type="text" 
            name="author" 
            placeholder='Autor da foto'
            required
          />
          <label htmlFor="address">Endereço:</label>
          <input 
            id='address'
            type="text" 
            name="address"
            placeholder='http://galeria_de_fotos/lago.jpg' 
            required
          />
          <label htmlFor="tag" placeholder='Escolha a tag'>Tag:</label>
          <select name="tag">
            <option value="Brasil">Brasil</option>
            <option value="Lagos">Lagos</option>
            <option value="Neve">Neve</option>
            <option value="Paisagens">Paisagens</option>
            <option value="PorDoSol">Por do Sol</option>
            <option value="Praia">Praia</option>
          </select>
        </div>
        <div className={styles.button_container}>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </main>
  )
}






