import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuMobile.module.scss';
import logo from '../../image/Header/logo.png'

export const MenuMobile = ({onClose}) => {

    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <img className={styles.logo} src={logo} alt = 'логотип'/>
                <button className={styles.button} onClick={onClose} aria-label='закрыть меню'/>
            </div>
            <nav className={styles.nav}>
                    <Link className={styles.menu_link} to='/' onClick={onClose}>Главная</Link>
                    <Link  className={styles.menu_link} to='/poroda'>О Породе</Link>
                    <Link className={styles.menu_link} to='/istoriya' onClick={onClose}>О нас</Link>
                    <Link className={styles.menu_link} to='/foto' onClick={onClose}>Фото и видео</Link>
                    <Link className={styles.menu_link} to='/shchenki' onClick={onClose}>Щенки</Link>
                    <Link className={styles.menu_link} to='/kontakty' onClick={onClose}>Контакты</Link>
            </nav>
        </div>
    );
}
