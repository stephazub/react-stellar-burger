import React from "react";
import styles from './ModalOverlay.module.css'

export default function Overlay({ onClose }) {
    
    const closeModal = (evt) => {
        if (evt.target.classList.contains(styles.overlay)) {
            onClose()
        }
    }

    return (
        <div className={styles.overlay} onClick={closeModal}>
        </div>
    )
}