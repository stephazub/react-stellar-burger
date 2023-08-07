import React from "react";
import styles from './Overlay.module.css';

export function Overlay({ onClose }) {
    
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