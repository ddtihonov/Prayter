import React from 'react'
import styles from './InitialPage.module.scss'

export const InitialPage = ({isOpen}) => {
    return (
        <section className={styles.main}>
            <div className={styles.box}>
                <div className={styles.container}>
                    <h4 className={styles.subtitle}>Pоссийская порода</h4>
                    <h1 className={styles.title}>ПРАЙТЕР</h1>
                    <div className={styles.line}></div>
                    <p className={styles.text}>собака-компаньон</p>
                    <a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://t.me/N_Gadzhieva' aria-label='телеграмм'>задать вопрос</a>
                </div>
            </div>
        </section>
    )
}