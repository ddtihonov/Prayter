import React, {useCallback} from 'react'
import styles from './CardImage.module.scss'


export const CardImage = ({item, isImageOpen, index}) => {

    const cardClick = useCallback(() => {
        isImageOpen(index)
    }, [index, isImageOpen])

    return (
        <li className={styles.item}  onClick={cardClick}>
            <img className={styles.image} src={item.image} alt='прическа'/>
        </li>
    )
}