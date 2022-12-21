import React, {useEffect } from 'react'
import { motion } from "framer-motion"
import styles from './Pup.module.scss'
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

export const Pup = ({isOpen, popupOpen}) => {

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
                    <motion.p className={styles.text} variants={subtitleAnimation}>Визуально щенка прайтера от питбуля отличить практически невозможно, ведь главное отличие этих пород заключается в различных характерах и темпераментах.</motion.p>
                </div>
                <div className={styles.box_image}>
                    <motion.img className={styles.image} src={image} alt='прайтеры' variants={imageAnimation}/>
                </div>
            </div>
        </motion.section>
    )
}