import React from 'react';
import styles from './ToggleComments.css'

const ToggleComments = ({comments, postId, openComments ,onOpenComments, onCloseComments}) => {
    return (
        !openComments ? 
            <button className={styles.baseOpenCommentsButton} onClick={() => onOpenComments(postId)}>Open Comments</button> 
            : 
            <button className={styles.baseOpenCommentsButton} onClick={() => onCloseComments(postId)}>Close Comments</button>
    );
}

export default ToggleComments;
