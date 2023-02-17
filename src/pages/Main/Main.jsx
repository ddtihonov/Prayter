import React from 'react'
import {Helmet} from "react-helmet"
import styles from './Main.module.scss'
import { InitialPage } from '../../components/initialPage/InitialPage'
import { Historia } from '../../components/Historia/Historia'
import { Portfolio } from '../../components/Portfolio/Portfolio'


export const Main = ({isOpen, isImageOpen}) => {

    return (
        <section className={styles.main}>
            <Helmet>
                <title>Племенной питомник "Пит Прайт Москва" порода Прайтер</title>
                <meta name="description" content="Пит Прайт Москва - информация о племенном питомнике. Все о Прайтере. Щенки прайтера Москва. Полная информация о породе Прайтер. Характер. Кормление. Содержание."></meta>
                <link rel="canonical" href="https://praiter-moscow.ru/" />
            </Helmet>
            <InitialPage
                isOpen={isOpen}
            />
            <Historia
                isOpen={isOpen}
            />
            <Portfolio
                isImageOpen={isImageOpen}
            />
        </section>
    )
}