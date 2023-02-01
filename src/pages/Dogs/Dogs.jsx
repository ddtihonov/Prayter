import React, {useEffect } from 'react'
import styles from './Dogs.module.scss'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { Portfolio } from '../../components/Portfolio/Portfolio'

export const Dogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className={styles.main}>
            <BreadCrumbs
                text={'Наши собаки'}
            />  
            <Portfolio/>     
        </section>
    )
}