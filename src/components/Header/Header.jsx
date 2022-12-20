import React, {useState} from 'react'
import header from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../image/Header/logo.png'

export const Header = ({isOpen}) => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10){
            setVisible(true)
        } 
        else if (scrolled <= 10){
            setVisible(false)
        }
    }

    window.addEventListener('scroll', toggleVisible);

    return (
    <header  className={`${header.header} ${visible && header.header_scroll}`}>
            <div className={header.box}>
                <Link to='/'>
                    <img className={header.logo} src={logo} alt = 'логотип'/>
                </Link>
                <nav className={header.nav}>
                    <a className={header.link} href='#AboutUs'>О НАС</a>
                    <a className={header.link} href='#Portfolio'>ПРОИЗВОДИТЕЛИ</a>
                    <a className={header.link} href='#Services'>ЩЕНКИ</a>
                    <Link className={header.link} to='voprosy'>НОВОСТИ</Link>
                    <a className={header.link} href='#Kontakty'>КОНТАКТЫ</a>
                </nav>
                <button className={header.button} type='button' onClick={isOpen} aria-label='открыть меню'/>
            </div>         
    </header>
    );
};