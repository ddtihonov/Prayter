import React, {useEffect } from 'react'
import { motion } from "framer-motion"
import styles from './AboutUs.module.scss'
import image from '../../image/AboutUs/image.png'

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
        y: 500,
        opacity: 0,
    },

    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
    }
}

export const AboutUs = ({isOpen, popupOpen}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.section 
            className={styles.main}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.4, once: true}} 
            >
            <div className={styles.container}>
                <div className={styles.box}>
                    <motion.h1 className={styles.title} variants={titleAnimation}><span>ПИТ ПРАЙТ</span> Москва</motion.h1>
                    <motion.p className={styles.text} variants={subtitleAnimation}>Наш питомник занимается разведением Прайтеров уже более 25 лет путём жёсткого селекционного отбора. Цель питомника сделать универсальную, многофункциональную,хорошо управляемую, спортивную собаку с крепкой нервной системой и безграничной любовью к человеку. Прайтер-это собака компаньон и терпеливая, нежная и заботливая нянька для ваших детей. Собаки нашего питомника уже не имеют отношения к питбулям рабочих (боевых) линий.</motion.p>
                </div>
                <div className={styles.box_image}>
                    <motion.img className={styles.image} src={image} alt='прайтеры' variants={imageAnimation}/>
                </div>
            </div>
        </motion.section>
    )
}