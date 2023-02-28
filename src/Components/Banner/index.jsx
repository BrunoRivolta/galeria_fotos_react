import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './Banner.module.scss'
import banner from './banner.jpg'
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'


const Banner = () => {
    const images = [
        banner,
        banner1,
        banner2,
        banner3
    ]

    return (
        <section className={styles.container}>
            <Zoom className={styles.imagem} scale={1.4} indicators={false}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                    </div>
                ))}
            </Zoom>
            <h2 className={styles.titulo}>A galeria mais completa</h2>
            <h2 className={styles.titulo1}>da internet!</h2>
        </section>
    )
}

export default Banner
