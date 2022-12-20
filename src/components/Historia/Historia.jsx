import React from 'react'
import styles from './Historia.module.scss'


export const Historia = ({isOpen}) => {
    return (
        <section className={styles.main} id='AboutUs'>
            <div className={styles.box}>
                <div className={styles.container}>
                    <h2 className={styles.title} >О нас</h2>
                    <div className={styles.line}></div>
                    <h5 className={styles.subtitle}>Окунись в мир гармонии и красоты вместе Belle.</h5>
                    <p className={styles.text}>Belle - это бьюти-проект, в основе которого лежит любовь к женской природе и естественной красоте. Все наши мастера исповедуют идею о том, что нет ничего лучше вас самих и задача настоящего мастера подчеркнуть ваши качества, не создавая конфликта внутреннего и внешнего содержания. Сила в гармонии.</p>
                    <button className={styles.button} type='button' onClick={isOpen}>записаться</button>
                </div>
            </div>
        </section>
    )
}