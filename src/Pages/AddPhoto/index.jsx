import Banner from 'Components/Banner'
import Button from 'Components/Button'
import InputField from 'Components/InputField';
import React, { useState } from 'react'
import styles from './AddPhoto.module.scss'
import { AiOutlineTable, AiOutlinePicture } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import SelectField from 'Components/SelectField';

export default function AddPhoto() {  

  const tags = ['Brasil', 'Lagos', 'Neve', 'Paisagens', 'PorDoSol', 'Praia']

  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [address, setAddress] = useState()
  const [photoTag, setPhototag] = useState('Brasil')

  console.log(photoTag)

  return (
    <main>
      <Banner />
      <h2 className={styles.title}>Adicine suas fotos</h2>
      <form className={styles.container} >
        <div className={styles.input}>
          <section className={styles.icon_container}>
            <AiOutlinePicture className={styles.icons}/>
            <BsArrowRightShort className={styles.icons}/>
            <AiOutlineTable className={styles.icons}/>
          </section>
          <InputField toAlter={value => setTitle(value)} label={'title'} name={'Titulo'} type={'text'} placeholder={'Titulo da foto'} />
          <InputField toAlter={value => setAuthor(value)} label={'author'} name={'Autor'} type={'text'} placeholder={'Autor da foto'} />
          <InputField toAlter={value => setAddress(value)} label={'adress'} name={'Endereço'} type={'text'} placeholder={'http://galeria_fotos/lago.jpg' } />
          <SelectField toAlter={value => setPhototag(value)} tagsList={tags} label={'tag'} name={'Tags'} />
        </div>
        <div className={styles.button_container}>
          <Button>Adicionar</Button>
        </div>
      </form>
    </main>
  )
}


