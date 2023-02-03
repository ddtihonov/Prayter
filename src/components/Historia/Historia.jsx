import React from 'react'
import styles from './Historia.module.scss'
import image from '../../image/Historia/image_6.png'
import image_1 from '../../image/Historia/image_8.png'
import image_2 from '../../image/Historia/image_9.png'


export const Historia = ({isOpen}) => {
    return (
        <section className={styles.main}>
            < div className={styles.box}>
                    <div className={styles.box_info}>
                        <img className={styles.image} src={image_1} alt='прайтер'/>
                        <div className={styles.box_text}>
                            <h3 className={styles.subtitle}><span>Прайтер </span>обзор породы</h3>
                            <p className={styles.text}>&#8226; Подходит в качестве первой собаки</p>
                            <p className={styles.text}>&#8226; Легко поддается дресировке</p>
                            <p className={styles.text}>&#8226; Хорошо уживается с другими питомцами</p>
                        </div>
                    </div>
                    <div className={styles.box_info}>
                        <div className={styles.box_text}>
                            <h3 className={styles.subtitle}><span>Прайтер </span></h3>
                            <p className={styles.text}>&#8226; Короткошерстная собака среднего размера</p>
                            <p className={styles.text}>&#8226; Комфортно чувствует себя в городских условиях</p>
                            <p className={styles.text}>&#8226; Удобна для квартирного содержания</p>
                        </div>
                        <img className={styles.image} src={image} alt='прайтер'/>
                    </div>
                    <div className={styles.box_info}>
                        <img className={styles.image} src={image_2} alt='прайтер'/>
                        <div className={styles.box_text}>
                            <h3 className={styles.subtitle}><span>Прайтер </span></h3>
                            <p className={styles.text}>&#8226; Ориентирована на человека</p>
                            <p className={styles.text}>&#8226; Хорошо относится ко всем членам семьи</p>
                            <p className={styles.text}>&#8226;Можно заводить в семью где есть маленькие дети</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}