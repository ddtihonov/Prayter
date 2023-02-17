import React, {useEffect } from 'react'
import {Helmet} from "react-helmet"
import { motion } from "framer-motion"
import styles from './Contacts.module.scss'
import image from '../../image/Contacts/image_9.png'
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

export const Contacts = () => {

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
            <Helmet>
                <title>Контакты Пит Прайт Москва</title>
                <meta name="description" content="Контакты Пит Прайт Москва"></meta>
                <link rel="canonical" href="https://praiter-moscow.ru/kontakty" />
            </Helmet>      
            <BreadCrumbs
                text={'Контакты'}
            />    
            <div className={styles.container}>
                <div className={styles.box}>
                    <motion.h1 className={styles.title} variants={titleAnimation}>Наши <span>контакты</span></motion.h1>
                    <motion.p className={styles.text} variants={subtitleAnimation}>Обращайтесь в ПИТ ПРАЙТ Москва с любыми вопросами, касающимися условий содержания, ухода, особенностей питания, здоровья и мы с радостью Вас проконсультируем.</motion.p>
                </div>
                <div className={styles.box_image}>
                    <motion.img className={styles.image} src={image} alt='прайтеры' variants={imageAnimation}/>
                </div>
            </div>
            <div className={styles.box_data}>
                <div>
                    <p className={styles.text}>Телефон</p>
                    <a className={styles.link_data} href="tel:+ 7 (925) 889-85-45" target='_blank' rel='noopener noreferrer'>+7 (985) 830-73-22</a>
                </div>
                <div>
                    <p className={styles.text}>E-mail</p>
                    <a className={styles.link_data} href="mailto:Natalia.Gadzhieva@gmail.com" target='_blank' rel='noopener noreferrer'>Natalia.Gadzhieva@gmail.com</a>
                </div>
            </div>
        </motion.section>
    )
}