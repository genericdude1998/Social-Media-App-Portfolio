import React from 'react';
import styles from './Post.css';
import PropTypes from 'prop-types';
import UserLink from './UserLink';
import withTheme from '../theme/withTheme';

const Post = ({id, name, content, date, theme}) => {
    return (
        <div className={styles.basePost}>
            <UserLink id={id} name={name} className={styles.basePostLink}/>
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

export default withTheme(Post);
