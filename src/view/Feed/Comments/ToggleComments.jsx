import React from 'react';
import styles from './ToggleComments.css';
import PropTypes from 'prop-types';

const ToggleComments = ({postId, openComments ,onOpenComments, onCloseComments}) => {
    return (
        !openComments ? 
            <button className={styles.baseOpenCommentsButton} onClick={() => onOpenComments(postId)}>Open Comments</button> 
            : 
            <button className={styles.baseOpenCommentsButton} onClick={() => onCloseComments(postId)}>Close Comments</button>
    );
}

ToggleComments.propTypes = {
    postId:PropTypes.number,
    openComments:PropTypes.bool, 
    onOpenComments:PropTypes.func,
    onCloseComments:PropTypes.func,

}

export default ToggleComments;
