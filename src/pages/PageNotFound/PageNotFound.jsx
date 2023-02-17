import React from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router";
import styles from './PageNotFound.module.scss'

export const PageNotFound = () => {

    const navigate = useNavigate();
    
    const goBack = () => navigate(-1);

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.subtitle}>Хьюстон, у нас проблема</h2>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>Страница не найдена</p>
                <Link className={styles.link} to='' onClick={goBack}>Cдать назад</Link>
            </div>
        </section>
        
    )
}