import React from 'react';
import styles from './Post.css';
import PropTypes from 'prop-types';
import UserLink from './UserLink';

const Post = ({id, name, content, date}) => {
    return (
        <div className={styles.basePost}>
            <UserLink id={id} name={name}/>
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
