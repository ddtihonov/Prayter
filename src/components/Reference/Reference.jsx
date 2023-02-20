import React from 'react'
import styles from './Reference.module.scss'
import {Helmet} from "react-helmet"
import { motion } from "framer-motion"
import { arrDocuments } from '../../utils/data'
import { v4 as uuidv4 } from 'uuid'
import image from '../../image/Breed/Image_5.jpg'
import { CardImage } from '../CardImage/CardImage'



export const Reference = ({isImageOpen}) => {

    const titleAnimation = {
        hidden: {
            x: -500,
            opacity: 0,
        },
    
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: .8 }
        }
    }
    
    const subtitleAnimation = {
        hidden: {
            x: -500,
            opacity: 0,
        },
    
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1 }
        }
    }
    
    const imageAnimation = {
        hidden: {
            x: 500,
            opacity: 0,
        },
    
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1 }
        }
    }


    return (
        <motion.section 
            className={styles.main} 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.4, once: true}} 
            >
                <Helmet>
                    <title>Прайтер о породе</title>
                    <meta name="description" content="Прайтер о породе"></meta>
                    <link rel="canonical" href="https://praiter-moscow.ru/poroda" />
                </Helmet>    
                <div className={styles.box_info}>
                    <div className={styles.box}>
                        <motion.h2 className={styles.title} variants={titleAnimation}>Краткая историческая <span>cправка</span></motion.h2>
                        <motion.p className={styles.text} variants={subtitleAnimation}>Прайтер - порода относится к группе компаньон, (в выставочном ринге терьеры) начала свое формирование в конце прошлого столетия в России, городе Санкт-Петербурге, экспертом-кинологом Хейнонен И.А, в питомнике Пит Прайт. Порода Прайтер по своему происхождению имеет одни корни с АПБТ его кровей в породе 80% и АСТ, но далее их пути расходятся. Путем жесткого селекционного отбора более 25 лет, как по экстерьеру, так и по нервной системе, постоянно ведется работа для получения более однородного поголовья в породе Прайтер.</motion.p>
                    </div>
                    <motion.figure className={styles.article} variants={imageAnimation}>
                    <img className={styles.article_image} src={image} alt='сайт'/>
                    <figcaption className={styles.article_box}>
                        <h6 className={styles.article_subtitle}>Хейнонен И. & Гаджиева Н.</h6>
                    </figcaption>
                </motion.figure>
                </div>
                <div className={styles.box_documents}>
                    {arrDocuments.map((item, index) => {
                        const keyUid = uuidv4()
                        let arrPortfolio = arrDocuments
                        return (
                            <CardImage
                                    key={keyUid}
                                    item={item}
                                    index={index}
                                    isImageOpen={isImageOpen}
                                    arrPortfolio={arrPortfolio}
                                />
                        )
                    })}

                </div>
        </motion.section>
    )
}