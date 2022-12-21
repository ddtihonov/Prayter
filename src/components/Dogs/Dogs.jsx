import React, {useEffect } from 'react'
import { motion } from "framer-motion"
import styles from './Dogs.module.scss'
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

export const Dogs = ({isOpen, popupOpen}) => {

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
                    <motion.h1 className={styles.title} variants={titleAnimation}>Наши<span> производители</span></motion.h1>
                    <motion.p className={styles.text} variants={subtitleAnimation}>К производителям в нашем питомнике мы относимся крайне серьёзно.</motion.p>
                </div>
                <div className={styles.box_image}>
                    <motion.img className={styles.image} src={image} alt='прайтеры' variants={imageAnimation}/>
                </div>
            </div>
        </motion.section>
    )
}