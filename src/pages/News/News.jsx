import React, {useEffect } from 'react'
import styles from './News.module.scss'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import image_1 from '../../image/News/image_1.webp'
import image_2 from '../../image/News/image_2.webp'

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
                    <div className={styles.box}>
                        <div className={styles.box_image}>
                            <img className={styles.image} src={image_1} alt='сайты'/>
                        </div>
                        <div className={styles.box_info} >
                            <h5 className={styles.date}>18.01.2023</h5>
                            <h3 className={styles.title}>Дарвин прайтера одобрил</h3>
                            <p className={styles.text}>18 февраля Дарвиновский музей (г. Москва, ул. Вавилова, д. 57) отмечает День эволюции — первый и единственный в России праздник, посвящённый дню рождения Чарльза Дарвина. С помощью интерактивных занятий, мастер-классов, игр детки и их родители убедятся, что теория эволюции — это просто и интересно в любом возрасте. Кинологический центр «Сокольники» пригласили поучаствовать и продемонстрировать детям и родителям разные породы собак, созданные человеком.Формат: лекция с демонстрацией живых собак с рассказом о породах и их способностях. Породу прайтер представит ученик школы - яркого окраса шоколадный триколор прайтер Индиго! И поможет ему в этом его хозяин Антон, за что Московский филиал МПП «Пит Прайт» очень его благодарит!   &#8194;<a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://dzen.ru/a/Y8ey38WfkRdQbjwM' aria-label='выставка в музее'>подробнее...</a></p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.box_image}>
                            <img className={styles.image} src={image_2} alt='сайты'/>
                        </div>
                        <div className={styles.box_info} >
                            <h5 className={styles.date}>19.12.2022</h5>
                            <h3 className={styles.title}>Кинология жива благодаря заводчикам?</h3>
                            <p className={styles.text}>Невероятно отвратительной для меня является бесконечная беготня между социальными сетями в поисках обратной связи, все через vpn🤕 Трудно сегодня всем.. все это ясно и понятно, я 🤐 
                            Помните период ковида? Всё, «до свидания социум»! Жуть какая-то, правда? Продержались, как смогли. Общались, как удавалось. Кинология не рухнула, хотя казалось, что крах близок. И в миг, когда было вообще не ясно, что делать, чем кормить собак…
                            государство заявило, что «не смотря на вирус, выгул на лонг дистанции разрешён только с собакой»🤷‍♀️ Я помню, как обрели дом щенки, поразъехались в комфортные семьи подростки, взрослые… вообще все, кому было «пора на диван в объятия хозяев». Не знаю, почему об этом молчат или стесняются сказать.   &#8194;<a className={styles.link} target='_blank' rel='noopener noreferrer' href='https://dzen.ru/a/Y6BaP_Yh3AAc_Cgk' aria-label='Кинология'>подробнее...</a></p>
                        </div>
                    </div>                      
                </div>
        </section>
    )
}