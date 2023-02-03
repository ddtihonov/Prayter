import React, {useState, useEffect, useCallback} from 'react'
import styles from './VideoClip.module.scss'
import { arrVideo } from '../../utils/data'
import { v4 as uuidv4 } from 'uuid'
import ScreenSize from '../../hooks/ScreenSize'
import video from '../../image/VideoClip/video.MP4'
import { CardVideo } from '../CardVideo/CardVideo'


export const VideoClip = ({isImageOpen}) => {

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
                <h2 className={styles.title} ><span>Прайтерз</span> пикчерз представляет</h2>
                <ul className={styles.list}>
                {arrVideo.map((item, index) =>{
                        const keyUid = uuidv4()
                        if (index + 1 <= moviesTotal) {
                            return(
                                <CardVideo
                                    key={keyUid}
                                    item={item}
                                    index={index}
                                />
                            ) 
                        }else {
                            return ''
                        }
                    })}
    
                </ul>
                {moviesTotal < arrVideo.length && <button  className={styles.button} onClick={addCards}>Ещё видео</button>}
            </div>
        </section>
    )
}