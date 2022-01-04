import React from 'react';
import styles from './ProgressBar.css'

const ProgressBar = ({label, percentage = 'empty'}) => {
    return (
        <div className={styles.progressBar}>
            <label>{label}</label>
            <div className={styles.barContainer}>
                <div className={styles.bar}></div>  
            </div>
        </div>
    );
}

export default ProgressBar;
