import React, {useEffect } from 'react'
import styles from './Health.module.scss'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

export const Health = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className={styles.main}>
            <BreadCrumbs
                text={'Здоровье'}
            />
            <div className={styles.container}>

            </div>
        
        </section>
    )
}