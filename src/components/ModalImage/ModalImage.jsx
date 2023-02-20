import React, {useEffect, useState} from 'react'
import { createPortal } from "react-dom"
import modal from './ModalImage.module.scss'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import { v4 as uuidv4 } from 'uuid'


export const ModalImage = ({onClose, index, arr}) => {

    const [activeIndex, setActiveIndex] = useState(index)
    const modalRoot = document.getElementById("modals")

    useEffect(() => {
        const handleEscClose = (evt) =>{
            if (evt.key ==='Escape')  onClose()
        }
        document.addEventListener('keydown', handleEscClose)
        return () => document.removeEventListener('keydown', handleEscClose)
    }, [onClose])

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 11
        } else if (newIndex > arr.length -1) {
            newIndex = 0
        }
    
        setActiveIndex(newIndex)
    }

    return createPortal (
        <ModalOverlay onClick={onClose}>
            {arr.map((item, index) => {
                const keyUid = uuidv4()
                return(
                    <div className={`${index === activeIndex ? modal.modal : modal.modal_active}`} onClick={evt => evt.stopPropagation()} key={keyUid}>
                    <button data-test="close-button" className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}/>
                    <img className={modal.image} src={arr[activeIndex].image} alt={arr[index].title}/>
                    <button className={modal.button_left} type="button" onClick={() => updateIndex(activeIndex - 1)}/>
                    <button className={modal.button_right} type="button" onClick={() => updateIndex(activeIndex + 1)}/>
                    <div className={modal.box}>
                        <p className={modal.text}>{activeIndex + 1} / {arr.length}</p>
                    </div>
                </div>
                )
            })}
            
        </ModalOverlay>
        ,modalRoot
    );
};