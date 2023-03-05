import Banner from 'Components/Banner'
import Button from 'Components/Button'
import InputField from 'Components/InputField';
import React, { useContext, useState } from 'react'
import styles from './AddPhoto.module.scss'
import { AiOutlineTable, AiOutlinePicture } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import SelectField from 'Components/SelectField';
import { AddPhotosContext } from 'Common/Context/addPhoto';
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';

export default function AddPhoto() {

  const { photos, setPhotos } = useContext(AddPhotosContext)

  const tags = ['Brasil', 'Lagos', 'Neve', 'Paisagens', 'PorDoSol', 'Praia']

  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [address, setAddress] = useState()
  const [photoTag, setPhototag] = useState('Brasil')
  const [error, setError] = useState()
  const [sucess, setSucess] = useState()

  function formValidation() {
    setError('')

    if(title === undefined || author === undefined || address === undefined) {
      return setError('! Todos os campos precisam ser preenchidos')
    } 
    if(title.length < 5) {
      return setError('! O titulo precisa ter mais de 5 caracteres')
    } 
    if(author.length < 3) {
      return setError('! O autor precisa ter mais de 3 caracteres')
    } 
    if(address.length < 5) {
      return setError('! O endereço precisa ter mais de 5 caracteres')
    } 

    addNewPhoto(title, author, address, photoTag)
    setSucess('Adicionado com Sucesso, veja na galeria')
  }

  function addNewPhoto(title, author, address, tag) {

    if(photos.length === 0) {
      setPhotos([{
        id: uuidv4(),
        titulo: title,
        endereco: address,
        autor: author,
        tag: tag
      }])
    } else {
      const list = photos
      const newPhoto = {
        id: uuidv4(),
        titulo: title,
        endereco: address,
        autor: author,
        tag: tag
      }
      list.splice(0, 0, newPhoto)
      setPhotos(list)
    }
  }

  return (
    <main>
      <Banner />
      <h2 className={styles.title}>Adicione suas fotos</h2>
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
          <div className={styles.message_container}>
            <span className={styles.error}>{error}</span>
            <Link to={'/'}><span className={styles.sucess}>{sucess}</span></Link>
          </div>
        </div>
        <div className={styles.button_container}>
          <Button 
            onClick={(event) => {
              event.preventDefault()
              formValidation()
            }}
          >
            Adicionar
          </Button>
        </div>
      </form>
    </main>
  )
}


