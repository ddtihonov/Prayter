import React, {useEffect } from 'react'
import { motion } from "framer-motion"
import styles from './News.module.scss'
import image from '../../image/Contacts/image_46.png'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

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

export const News = () => {

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
            <BreadCrumbs
                text={'Новости'}
            />    
            <div className={styles.container}>
                <div className={styles.box}>
                    <motion.h1 className={styles.title} variants={titleAnimation}>Наши <span>новости</span></motion.h1>
                    <motion.p className={styles.text} variants={subtitleAnimation}>Обращайтесь в ПИТ ПРАЙТ Москва с любыми вопросами, касающимися условий содержания, ухода, особенностей питания, здоровья и мы с радостью Вас проконсультируем.</motion.p>
                </div>
                <div className={styles.box_image}>
                    <motion.img className={styles.image} src={image} alt='прайтеры' variants={imageAnimation}/>
                </div>
            </div>
        </motion.section>
    )
}