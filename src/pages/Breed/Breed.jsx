import React, {useEffect } from 'react'
import styles from './Breed.module.scss'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'

export const Breed = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className={styles.main}>
            <BreadCrumbs
                text={'О породе'}
            />
            <div className={styles.container}>
                <h2 className={styles.title} >Стандарты породы <span>прайтер</span></h2>
                <h4 className={styles.subtitle}>Общий вид</h4>
                <p className={styles.text}>Прайтер - чуть выше и массивнее среднего размера - производит впечатление крепкой, сильной, мышечной, атлетически и гармонично сложенной собаки. Вся его стать говорит о том, что он создан для спорта и активного времяпрепровождения. Темпераментный, активный, азартный прайтер легко управляемый и очень ориентирован на подчинение человеку, никогда не доминирует и не пытается быть лидером в семье.</p>
                <h4 className={styles.subtitle}>Голова</h4>
                <p className={styles.text}>Средней длины, пропорциональна корпусу, череп плоский, широкий между ушами с четко выраженной мускулатурой щёк. Линия черепа и морды параллельны друг другу.</p>
                <h4 className={styles.subtitle}>Морда</h4>
                <p className={styles.text}>Средней длины. Переход от лба к морде (стоп) хорошо выражен, но не слишком резкий. По длине морда короче черепа. Примерно на 2:3.</p>
                <h4 className={styles.subtitle}>Губы</h4>
                <p className={styles.text}>Плотно прилегающие, не слишком отвисшее с плавным разгибом, продолжающимся до угла губы.</p>
                <h4 className={styles.subtitle}>Зубы</h4>
                <p className={styles.text}>Челюсти мощные. Прикус ножницеобразный, с возрастом допускается прямой. Полный комплект зубов, крупных, белых.</p>
                <h4 className={styles.subtitle}>Нос</h4>
                <p className={styles.text}>Крупный с широко открытыми ноздрями. Пигментация может быть разной. У черноносых собак, только однородно черный. У рэд ноуз мочка носа должна быть окрашена в тон окраса от светло-кремового до темно-коричневого. Плохо прокрашенный нос является недостатком.</p>
                <h4 className={styles.subtitle}>Уши</h4>
                <p className={styles.text}>Посажены высоко, купированные. Если не купированные, то образуют постав, сложенный в «лепесток розы» или развёрнутыми в треугольники.</p>
                <h4 className={styles.subtitle}>Глаза</h4>
                <p className={styles.text}>Округлой или миндалевидной форм, широко расставлены. У собак с черной мочкой носа, цвет глаз темно карий. У собак, имеющих рэд ноуз, цвет глаз должен быть в тон окраса, от светло-янтарного до темно-желтого.</p>
                <h4 className={styles.subtitle}>Шея</h4>
                <p className={styles.text}>Мускулистая, крепкая, сухая, немного изогнута. Средней длины, плавно расширяется от головы к лопаткам.</p>
                <h4 className={styles.subtitle}>Корпус</h4>
                <p className={styles.text}>Желательно компактный, особенно у кобелей. Длина корпуса немного больше высоты в холке, но не слишком растянут.</p>
                <h4 className={styles.subtitle}>Линия верха</h4>
                <p className={styles.text}>Образует плавную, слегка изогнутую линию.</p>
                <h4 className={styles.subtitle}>Холка</h4>
                <p className={styles.text}>Хорошо выражена и плавно переходит в линию спины.</p>
                <h4 className={styles.subtitle}>Поясница</h4>
                <p className={styles.text}>Компактная слегка выпуклая, широкая, мускулистая.</p>
                <h4 className={styles.subtitle}>Круп</h4>
                <p className={styles.text}>Слегка скошен.</p>
                <h4 className={styles.subtitle}>Грудь</h4>
                <p className={styles.text}>Глубокая, умеренно широкая, рёбра хорошо вытянуты и изогнуты в области от позвоночника, затем становятся более плоскими, формируя глубокую грудь, достигающую локтей.</p>
                <h4 className={styles.subtitle}>Линия низа, живот</h4>
                <p className={styles.text}>Умеренно подтянут.</p>
                <h4 className={styles.subtitle}>Хвост</h4>
                <p className={styles.text}>Является естественным продолжением линии верха, шире у основания и сужается к концу. В расслабленном состоянии хвост опущен к низу и доходит до скакательных суставов. В движении хвост держится на уровне спины, при возбуждении выше, в виде серпа. Но никогда не должен закручиваться в кольцо и касаться спины.</p>
                <h4 className={styles.subtitle}>Передние конечности</h4>
                <p className={styles.text}>При осмотре спереди ровные и параллельные между собой с длинными округлыми и крепкими костями, без элементов грубости и загруженности.</p>
                <h4 className={styles.subtitle}>Лопатки</h4>
                <p className={styles.text}>Длинные и косые, плотно прилегающие к корпусу. Не должны быть слишком загружены.</p>
                <h4 className={styles.subtitle}>Плечи</h4>
                <p className={styles.text}>Длинные, расположенные под прямым углом к лопатке.</p>
                <h4 className={styles.subtitle}>Локти</h4>
                <p className={styles.text}>Не слишком плотно прижаты к груди, но и не вывернуты наружу.</p>
                <h4 className={styles.subtitle}>Предплечье</h4>
                <p className={styles.text}>Расположено вертикально, длинное, сухое и мускулистое.</p>
                <h4 className={styles.subtitle}>Запястье</h4>
                <p className={styles.text}>Крепкое, четко обозначенное, но не излишне увеличенное.</p>
                <h4 className={styles.subtitle}>Пясти</h4>
                <p className={styles.text}>Прямые, отвесные, крепкие.</p>
                <h4 className={styles.subtitle}>Пясти</h4>
                <p className={styles.text}>Прямые, отвесные, крепкие.</p>
                <h4 className={styles.subtitle}>Передние лапы</h4>
                <p className={styles.text}>Небольшие, округлые с крепко сжатыми пальцами. Подушечки с жёсткой подошвой.</p>
                <h4 className={styles.subtitle}>Задние конечности</h4>
                <p className={styles.text}>Имеют хорошую и рельефную мускулатуру. При осмотре сзади - ровные.</p>
                <h4 className={styles.subtitle}>Бедро</h4>
                <p className={styles.text}>Длинное, мускулистое.</p>
                <h4 className={styles.subtitle}>Голень</h4>
                <p className={styles.text}>Средней длины.</p>
                <h4 className={styles.subtitle}>Скакательные суставы</h4>
                <p className={styles.text}>С достаточно выраженными углами.</p>
                <h4 className={styles.subtitle}>Плюсны</h4>
                <p className={styles.text}>Умеренно короткие, отвесные, параллельные при осмотре сзади.</p>
                <h4 className={styles.subtitle}>Задние лапы</h4>
                <p className={styles.text}>С крепко сжатыми пальцами в комке, подушечки с жёсткой подошвой.</p>
                <h4 className={styles.subtitle}>Движения</h4>
                <p className={styles.text}>Лёгкие, сильные, пружинящие, уверенные. Иноходь является пороком.</p>
                <h4 className={styles.subtitle}>Шёрстные покров</h4>
                <p className={styles.text}>Шерсть короткая, блестящая, плотно прилегающая, без подшерстка.</p>
                <h4 className={styles.subtitle}>Окрас</h4>
                <p className={styles.text}>Допустим любой в сочетании с белыми отметинами, кроме мерль.</p>
                <h4 className={styles.subtitle}>Размеры и вес</h4>
                <p className={styles.text}>Рост кобеля 56-62 см; суки 53-58 см в холке.</p>
                <p className={styles.text}>N.B. Кобели должны иметь два хорошо развитых семенника, полностью опущенных в мошонку.</p>
                <h4 className={styles.subtitle_red}>Дефекты</h4>
                <p className={styles.text}>Любое отступление от вышеуказанных пунктов должно расцениваться как дефект. Серьёзность отношения к дефекту должна быть пропорциональна его степени.</p>
                <h4 className={styles.subtitle_red}>Недостатки</h4>
                < p className={styles.text}>В психике незначительная робость. Голова легковата по корпусу. Узкая, заострённая к носу, морда. Излишне выпуклые или близко посаженные глаза. Нехватка двух зубов в комплекте. Слишком растянутый корпус (особенно для кобелей). Провислая, куполообразная длинная поясница или проваливающаяся при движении спина.С лишком худая или излишне толстая собака. Слишком скошенный круп. Излишне перекручивающийся хвост. Конечности: слишком отведённые локти от корпуса. Прямое плечо. Слабая, распущенная пясть. Сближениям скакательные суставы. Отсутствие углов скакательного сустава.</p>
                <h4 className={styles.subtitle_red}>Дисквалифицирующие пороки</h4>
                <p className={styles.text}>Крипторхизм. Агрессивное или чрезмерно трусливое поведение. Любая собака, ясно показывающая физические или поведенческие отклонения, должна быть дисквалифицирована.</p>
            </div>
        
        </section>
    )
}