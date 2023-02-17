import React, {useEffect } from 'react'
import {Helmet} from "react-helmet"
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
            <Helmet>
                <title>Щенки прайтера. Прайтеры и дети.</title>
                <meta name="description" content="Портфолио Пит Прайт Москва"></meta>
                <link rel="canonical" href="https://praiter-moscow.ru/foto" />
            </Helmet>   
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