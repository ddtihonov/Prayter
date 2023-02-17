import React, {useEffect } from 'react'
import styles from './Dogs.module.scss'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { Portfolio } from '../../components/Portfolio/Portfolio'
import { Children } from '../../components/Children/Children'

export const Dogs = ({isImageOpen}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className={styles.main}>
            <BreadCrumbs
                text={'Наши собаки'}
            />  
            <Portfolio
                isImageOpen={isImageOpen}
            /> 
            <Children
                isImageOpen={isImageOpen}
            /> 
        </section>
    )
}