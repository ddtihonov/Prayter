import React from 'react'
import styles from './Main.module.scss'
import { InitialPage } from '../../components/initialPage/InitialPage'
import { Historia } from '../../components/Historia/Historia'
import { Portfolio } from '../../components/Portfolio/Portfolio'


export const Main = ({isOpen, isImageOpen}) => {

    return (
        <section className={styles.main}>
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