import React, {useEffect } from 'react'
import styles from './News.module.scss'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

export const News = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className={styles.main}>
            <BreadCrumbs
                text={'Новости'}
            />
            <div className={styles.container}>

            </div>
        
        </section>
    )
}