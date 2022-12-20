import React from 'react'
import styles from './Advantages.module.scss'
import icon from '../../image/Advantages/icon_1.svg'
import icon_2 from '../../image/Advantages/icon_2.svg'
import icon_3 from '../../image/Advantages/clock.svg'
import icon_4 from '../../image/Advantages/icon_3.svg'

export const Advantages = () => {

    return (
        <section 
            className={styles.main}>
                <div className={styles.box}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.item_box}>
                                <img className={styles.item_image}  src={icon_2} alt='иконка'/>
                            </div>
                            <h3 className={styles.item_title}>Лучшая косметика</h3>
                            <p className={styles.item_text}>В своей работе мы используем профессиональные косметические средства только от премиальных производителей.</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.item_box}>
                                <img className={styles.item_image}  src={icon_3} alt='иконка'/>
                            </div>
                            <h3 className={styles.item_title}>экономим ВРЕМЯ</h3>
                            <p className={styles.item_text}>Мы стараемся максимально быстро и качественно выполнить процедуру, для того чтобы Вы как можно дольше наслаждались идеальным результатом.</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.item_box}>
                                <img className={styles.item_image}  src={icon} alt='иконка'/>
                            </div>
                            <h3 className={styles.item_title}>БОНУСЫ И ПОДАРКИ</h3>
                            <p className={styles.item_text}>В нашей сети действует программа лояльности, с ее помощью Вы сможете оплачивать любимую услугу или продукт со скидкой до 30%</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.item_box}>
                                <img className={styles.item_image} src={icon_4} alt='иконка'/>
                            </div>
                            <h3 className={styles.item_title}>Профессиональная команда</h3>
                            <p className={styles.item_text}>Наши мастера проходят регулярные семинары и курсы повышения квалификации,водят новые техники и обучают молодых специалистов.</p>
                        </li>
                    </ul>
                </div>
        </section>
        
    )
}