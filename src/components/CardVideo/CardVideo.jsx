import React from 'react'
import styles from './CardVideo.module.scss'


export const CardVideo = ({item}) => {

    return (
        <li className={styles.item}>
            <video className={styles.video} src={item.video}  controls></video>
        </li>
    )
}