import React, {useState, useEffect, useCallback} from 'react'
import styles from './Children.module.scss'
import { arrChildren } from '../../utils/data'
import { v4 as uuidv4 } from 'uuid'
import ScreenSize from '../../hooks/ScreenSize'
import { CardImage } from '../CardImage/CardImage'


export const Children = ({isImageOpen}) => {

    const width = ScreenSize()
    const [moviesTotal, setMoviesTotal] = useState(0)
    const [addMovies, setAddMovies] = useState(0)


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

    return (
        <section className={styles.main} id='Portfolio'>
            <div className={styles.box}>
                <h2 className={styles.title} ><span>Прайтеры</span> и дети</h2>
                <ul className={styles.list}>
                    {arrChildren.map((item, index) =>{
                        const keyUid = uuidv4()
                        let arrPortfolio = arrChildren
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
                </ul>
                {moviesTotal <arrChildren.length && <button  className={styles.button} onClick={addCards}>Ещё фото</button>}
            </div>
        </section>
    )
}