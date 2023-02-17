import React from 'react'
import {Helmet} from "react-helmet"
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router";
import styles from './PageNotFound.module.scss'

export const PageNotFound = () => {

    const navigate = useNavigate();
    
    const goBack = () => navigate(-1);

    return (
        <section className={styles.main}>
            <Helmet>
                <title>Такой страницы нет</title>
                <meta name="description" content="Такой страницы нет"></meta>
                <link rel="canonical" href="https://praiter-moscow.ru" />
            </Helmet>   
            <div className={styles.container}>
                <h2 className={styles.subtitle}>Хьюстон, у нас проблема</h2>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>Страница не найдена</p>
                <Link className={styles.link} to='' onClick={goBack}>Cдать назад</Link>
            </div>
        </section>
        
    )
}