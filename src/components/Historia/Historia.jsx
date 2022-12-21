import React from 'react'
import styles from './Historia.module.scss'
import image from '../../image/Historia/image_2.png'


export const Historia = ({isOpen}) => {
    return (
        <section className={styles.main}>
            < div className={styles.box}>
                    <div className={styles.box_info}>
                        <img className={styles.image} src={image} alt='прайтер'/>
                        <div className={styles.box_text}>
                            <h3 className={styles.subtitle}><span>Прайтер </span>обзор породы</h3>
                            <p className={styles.text}>Прайтер (питбуль прайтер, пит прайт) - авторская порода собак-компаньонов, в формировании которой принимали участие американские питбультертерьеры, американские стаффордширские терьеры, немецкие доги, канарские доги и веймаранеры.</p>
                            <p className={styles.text}>Внешне это крупная собака ростом 53-62 см и весом 25-35 кг, продолжительностью жизни 12-15 лет.</p>
                        </div>
                    </div>
                    <div className={styles.box_info}>
                        <div className={styles.box_text}>
                            <h3 className={styles.subtitle}><span>Прайтер </span>характер и поведение</h3>
                            <p className={styles.text}>Прайтеры добродушны и очень ориентированы на человека, они лишены агрессии и легко управляются голосом. Этим собакам не свойственно проявлять доминантность или свои лидерские качества. Прайтеры отлично уживаются как с другими питомцами, так и с детьми.</p>
                            <p className={styles.text}>Интеллект высокий, легко поддаются обучению и дрессировке. Темперамент активный, прайтер обожает движение, но может составить компанию владельцу и в спокойных занятиях.</p>
                        </div>
                        <img className={styles.image} src={image} alt='прайтер'/>
                    </div>
            </div>
        </section>
    )
}

/*<p className={styles.text}>Прайтеры, обладая внешностью бойцовой собаки, характеризуются мягким нравом. Эта собака с удивительно уравновешенным характером используется только в качестве компаньона. Умный и надежный пес удачно впишется даже в семью с маленькими детьми. Рассмотрим описание, характеристики, породные признаки, а также узнаем об их происхождении.</p>*/
/*<h2 className={styles.title} >Прайтер история выведения и описание породы</h2>*/