import React from 'react';
import styles from './Post.css';
import PropTypes from 'prop-types';

const Post = ({name, content, date}) => {
    return (
        <div className={styles.basePost}>
            <h2 className={styles.basePostTitle}>{name}</h2>
            <p className={styles.basePostContent}>{content}</p>
            <p className={styles.basePostDate}>{date}</p>
        </div>
    );
}

Post.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
}

export default Post;
