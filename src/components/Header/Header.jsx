import React, {useState} from 'react'
import header from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../image/Header/logo.png'

export const Header = ({isOpen}) => {


    const routes  = useLocation(); 
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
    <header  className={`${header.header} ${visible && header.header_scroll}  ${routes.pathname !== '/' && header.header_scroll}`}>
            <div className={header.box}>
                <Link to='/'>
                    <img className={header.logo} src={logo} alt = 'логотип'/>
                </Link>
                <nav className={header.nav}>
                    <Link className={header.link} to='/poroda'>О Породе</Link>
                    <Link className={header.link} to='/istoriya'>О нас</Link>
                    <Link className={header.link} to='/foto'>Фото и видео</Link>
                    <Link className={header.link} to='/shchenki'>Щенки</Link>
                    <Link className={header.link} to='/kontakty'>Контакты</Link>
                </nav>
                <button className={header.button} type='button' onClick={isOpen} aria-label='открыть меню'/>
            </div>         
    </header>
    );
};