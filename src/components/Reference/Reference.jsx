import React from 'react'
import styles from './Reference.module.scss'
import { arrDocuments } from '../../utils/data'
import { v4 as uuidv4 } from 'uuid'
import image from '../../image/Breed/Image_5.jpg'



export const Reference = ({isImageOpen}) => {


    return (
        <section className={styles.main} >
                <h2 className={styles.title} >Краткая историческая <span>cправка</span></h2>
                <div className={styles.box_info}>
                    <p className={styles.text}>Прайтер - порода относится к группе компаньон, (в выставочном ринге терьеры) начала свое формирование в конце прошлого столетия в России, городе Санкт-Петербурге, экспертом-кинологом Хейнонен И.А, в питомнике Пит Прайт. Порода Прайтер по своему происхождению имеет одни корни с АПБТ его кровей в породе 80% и АСТ, но далее их пути расходятся. Путем жесткого селекционного отбора более 25 лет, как по экстерьеру, так и по нервной системе, постоянно ведется работа для получения более однородного поголовья в породе Прайтер.</p>
                    <figure className={styles.article}>
                    <img className={styles.article_image} src={image} alt='сайт'/>
                    <figcaption className={styles.article_box}>
                        <h6 className={styles.article_subtitle}>Хейнонен И. & Гаджиева Н.</h6>
                    </figcaption>
                </figure>
                </div>
                <div className={styles.box_documents}>
                    {arrDocuments.map(item => {
                        const keyUid = uuidv4()
                        return (
                            <img className={styles.image} src={item.image} alt={item.title} key={keyUid}/>
                        )
                    })}

                </div>
        </section>
    )
}