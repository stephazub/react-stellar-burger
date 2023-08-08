import React from 'react';
import { createPortal } from "react-dom";
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';


export default function Modal({ children, onClose }) {

    React.useEffect(() => {
        function onEscapeDown(e) {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', onEscapeDown)

        return () => {
            document.removeEventListener('keydown', onEscapeDown)
        }
    }, [])

    return createPortal(
        <>
            <ModalOverlay onClose={onClose} />
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </>,
        document.body
    )
}