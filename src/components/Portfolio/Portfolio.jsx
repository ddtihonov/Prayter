import React, {useState, useEffect, useCallback} from 'react'
import styles from './Portfolio.module.scss'
import { arrBoy } from '../../utils/data'
import { arrGirls } from '../../utils/data'
import { v4 as uuidv4 } from 'uuid'
import ScreenSize from '../../hooks/ScreenSize'
import { CardImage } from '../CardImage/CardImage'


export const Portfolio = ({isImageOpen}) => {

    const width = ScreenSize()
    const [moviesTotal, setMoviesTotal] = useState(0)
    const [addMovies, setAddMovies] = useState(0)
    const [boy, setBoy] = useState(true)


    useEffect(() => {
        const getCards = () => {
            if (width >= 980) {
                setMoviesTotal(6);
                setAddMovies(3);
                } else if (width < 980 && width >= 640) {
                    setMoviesTotal(6);
                    setAddMovies(2);
                        } else if (width <= 639) {
                            setMoviesTotal(6);
                            setAddMovies(1);
            }
        }
        getCards();
    }, [width])

    const addCards = useCallback(() => {
        setMoviesTotal(moviesTotal + addMovies);
    }, [moviesTotal, addMovies])

    const onBoys = useCallback(() => {
        setBoy(true)
    }, [])
    
    const onGirls = useCallback(() => {
        setBoy(false)
    }, [])

    return (
        <section className={styles.main} id='Portfolio'>
            <div className={styles.box}>
                <h2 className={styles.title} >Галерея московских <span>прайтеров</span></h2>
                <div className={styles.box_buttom}>
                    <button  className={`${boy && styles.button_boy} ${!boy && styles.button_boys}`} onClick={onBoys}>Кобели</button>
                    <button  className={`${boy && styles.button_girls} ${!boy && styles.button_girl}`} onClick={ onGirls}>Суки</button>
                </div>
                {boy && <ul className={`${boy && styles.list} ${!boy && styles.list_girl}`}>
                    {arrBoy.map((item, index) =>{
                        let arrPortfolio = arrBoy
                        const keyUid = uuidv4()
                        if (index + 1 <= moviesTotal) {
                            return(
                                <CardImage
                                    key={keyUid}
                                    item={item}
                                    index={index}
                                    isImageOpen={isImageOpen}
                                    arrPortfolio={arrPortfolio}
                                />
                            ) 
                        }else {
                            return ''
                        }
                    })}
                </ul>}
                {!boy && <ul className={styles.list}>
                    {arrGirls.map((item, index) =>{
                        const keyUid = uuidv4()
                        let arrPortfolio = arrGirls
                        if (index + 1 <= moviesTotal) {
                            return(
                                <CardImage
                                    key={keyUid}
                                    item={item}
                                    index={index}
                                    isImageOpen={isImageOpen}
                                    arrPortfolio={arrPortfolio}
                                />
                            ) 
                        }else {
                            return ''
                        }
                    })}
                </ul>}
                {boy && moviesTotal < arrBoy.length && <button  className={styles.button} onClick={addCards}>Ещё фото</button>}
                {!boy && moviesTotal < arrGirls.length && <button  className={styles.button} onClick={addCards}>Ещё фото</button>}
            </div>
        </section>
    )
}