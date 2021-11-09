import React from 'react';
import styles from './Post.css'

const Post = ({name, content, date}) => {
    return (
        <div className={styles.basePost}>
            <h2 className={styles.basePostTitle}>{name}</h2>
            <p className={styles.basePostContent}>{content}</p>
            <p className={styles.basePostDate}>{date}</p>
        </div>
    );
}

export default Post;
