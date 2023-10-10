import { Button, Typography } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './deleteMovie.module.scss'
import CloseIcon from '@mui/icons-material/Close';
let portalRoot = document.getElementById('portal-root')

const DeleteMovie = () => {

    if (!portalRoot) {
        portalRoot = document.createElement('div');
        portalRoot.setAttribute('id', 'portal')
        document.body.appendChild(portalRoot)
    }

    return ReactDOM.createPortal(

        <div className={`${styles.modalOverlay}`}>
            <div className={styles.modalContent}>
                <CloseIcon sx={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white', cursor: 'pointer' }} />
                <div className={styles.deleteContainer}>
                    <Typography variant='h4' sx={{ color: 'white' }}>DELETE MOVIE</Typography>
                    <Typography variant='caption' sx={{ color: 'white' }}>Are you sure want to delete this movie?</Typography>

                    <span><Button type='submit' variant="contained">CONFIRM</Button></span></div>
            </div>
        </div>,
        portalRoot
    )
}

export default DeleteMovie