import React, {useEffect } from 'react'
import {Helmet} from "react-helmet"
import { motion } from "framer-motion"
import styles from './AboutUs.module.scss'
import image from '../../image/AboutUs/image_3.jpg'
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

export const AboutUs = () => {

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
                <title>Пит Прайт Москва</title>
                <meta name="description" content="Пит Прайт Москва все о питомнике"></meta>
                <link rel="canonical" href="https://praiter-moscow.ru/istoriya" />
            </Helmet>     
            <BreadCrumbs
                text={'О нас'}
            />     
            <div className={styles.container}>
                <div className={styles.box}>
                    <motion.h1 className={styles.title} variants={titleAnimation}><span>ПИТ ПРАЙТ</span> Москва</motion.h1>
                    <p className={styles.text}>
                    Здравствуйте дорогие друзья!
                    </p>
                    <p className={styles.text}>
                    Меня зовут Гаджиева Наталья.
                    </p>
                    <p className={styles.text}>
                    И я - профессиональный кинолог, грумер, первый заводчик собак породы прайтер.
                    </p>
                    <p className={styles.text}>
                    Со мной можно обсудить породу доберман, расспросить о жизни с кавалер кинг чарльз спаниелями, а также узнать о реальных сложностях воспитания без вольерной жизни чаузи.
                    </p>
                    <p className={styles.text}>
                    Вы всегда можете приехать к нам в гости и познакомиться с позитивными прайтерами, задать каверзные вопросы и получить ответы. Мы откровенно и щедро поделимся опытом общения с прайтерами.
                    </p>
                </div>
                <div className={styles.box_image}>
                    <motion.img className={styles.image} src={image} alt='прайтеры' variants={imageAnimation}/>
                </div>
            </div>
        </motion.section>
    )
}