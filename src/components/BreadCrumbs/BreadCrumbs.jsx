import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BreadCrumbs.module.scss'

export const BreadCrumbs = ({text, link, children}) => {

    return (
    <section className={styles.main}>
        <div className={styles.box}>
            <Link className={styles.menu_link} to='/'>Главная</Link>
            {children}
            <p className={styles.menu_text}>&ensp;<span>/</span>&ensp;{text}</p>
        </div>
    </section>
    );
};