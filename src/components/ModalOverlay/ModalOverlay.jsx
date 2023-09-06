import styles from './ModalOverlay.module.css'
import { PropTypes } from 'prop-types';

export default function ModalOverlay({ onClose }) {

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

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}