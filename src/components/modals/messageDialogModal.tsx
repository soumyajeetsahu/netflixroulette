import { Button, Typography } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../modals/deleteMovie/deleteMovie.module.scss'
import CloseIcon from '@mui/icons-material/Close';
let portalRoot = document.getElementById('portal-root')

const MessageDialogModal: React.FC<any> = (props) => {

    if (!portalRoot) {
        portalRoot = document.createElement('div');
        portalRoot.setAttribute('id', 'portal')
        document.body.appendChild(portalRoot)
    }

    return ReactDOM.createPortal(

        <div className={`${styles.modalOverlay}`}>
            <div className={styles.modalContent}>
                <CloseIcon sx={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white', cursor: 'pointer' }} onClick={props.closeModal} />
                <div className={styles.deleteContainer}>
                    <Typography variant='h4' sx={{ color: 'white' }}>CONGRATULATIONS!</Typography>
                    <Typography variant='caption' sx={{ color: 'white' }}>The movie has been added sucessfully.</Typography>
                </div>
            </div>
        </div>,
        portalRoot
    )
}

export default MessageDialogModal