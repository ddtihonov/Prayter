import React, {useEffect} from 'react'
import { createPortal } from "react-dom"
import modal from './ModalImage.module.scss'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import { arrPortfolio } from '../../utils/data'

export const ModalImage = ({onClose, index}) => {

    const modalRoot = document.getElementById("modals")

    useEffect(() => {
        const handleEscClose = (evt) =>{
            if (evt.key ==='Escape')  onClose()
        }
        document.addEventListener('keydown', handleEscClose)
        return () => document.removeEventListener('keydown', handleEscClose)
    }, [onClose])

    return createPortal (
        <ModalOverlay onClick={onClose}>
            <div className={modal.modal} onClick={evt => evt.stopPropagation()}>
                <button data-test="close-button" className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}/>
                <img className={modal.image} src={arrPortfolio[index].image} alt='прическа'/>
            </div>
        </ModalOverlay>
        ,modalRoot
    );
};