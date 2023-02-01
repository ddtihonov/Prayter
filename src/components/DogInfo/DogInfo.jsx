import React from 'react'
import styles from './DogInfo.module.scss'



export const DogInfo = ({image, title, text}) => {

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.box_image}>
                    <img className={styles.image} src={image} alt='прайтеры'/>
                </div>    
                <div className={styles.info_box}>
                    <h3 className={styles.info_title}>{title}</h3>
                    <p className={styles.info_title}>{text}</p>
                </div>
            </div>
        </section>
    )
}