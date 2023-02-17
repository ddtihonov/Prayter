import React from 'react'
import styles from './Historia.module.scss'
import image from '../../image/Historia/image_5.jpg'
import image_1 from '../../image/Historia/image_8.jpg'
import image_2 from '../../image/Historia/image_6.jpg'


export const Historia = ({isOpen}) => {
    return (
        <section className={styles.main} id='AboutUs'>
            <div className={styles.container}>
                <h2 className={styles.title} >Почему<span> ПРАЙТЕР?</span></h2>
                < div className={styles.box}>
                        <div className={styles.box_info}>
                            <img className={styles.image} src={image} alt='прайтер'/>
                            <div className={styles.box_text}>
                                <p className={styles.text}><span>&#9830;</span> Подходит в качестве первой собаки</p>
                                <p className={styles.text}><span>&#9830;</span> Легко поддается дресировке</p>
                                <p className={styles.text}><span>&#9830;</span> Хорошо уживается с другими домашними питомцами</p>
                            </div>
                        </div>
                        <div className={styles.box_info}>
                            <img className={styles.image} src={image_1} alt='прайтер'/>
                            <div className={styles.box_text}>
                                <p className={styles.text}><span>&#9830;</span> Короткошерстная собака среднего размера</p>
                                <p className={styles.text}><span>&#9830;</span> Комфортно чувствует себя в городских условиях</p>
                                <p className={styles.text}><span>&#9830;</span> Удобна для квартирного содержания</p>
                            </div>
                        </div>
                        <div className={styles.box_info}>
                            <img className={styles.image} src={image_2} alt='прайтер'/>
                            <div className={styles.box_text}>
                                <p className={styles.text}><span>&#9830;</span> Ориентирован на человека</p>
                                <p className={styles.text}><span>&#9830;</span> Хорошо относится ко всем членам семьи</p>
                                <p className={styles.text}><span>&#9830;</span> Можно заводить в семью где есть маленькие дети</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}