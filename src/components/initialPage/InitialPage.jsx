import React from 'react'
import { motion } from "framer-motion"
import styles from './InitialPage.module.scss'

const titleAnimation = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {ease: "easeOut", duration: 1 }
    }
}

export const InitialPage = ({isOpen}) => {
    return (
        <section className={styles.main}>
            <div className={styles.box}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Прайтер </h1>
                    <div className={styles.line}></div>
                    <p className={styles.text}>Внешность питбуля, характер ангела.</p>
                    <button className={styles.button} type='button' onClick={isOpen}>задать вопрос</button>
                </div>
            </div>
        </section>
    )
}