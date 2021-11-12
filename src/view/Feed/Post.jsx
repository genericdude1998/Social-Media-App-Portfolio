import React from 'react';
import styles from './Post.css';
import PropTypes from 'prop-types';
import UserLink from './UserLink';
import withTheme from '../theme/withTheme';
import Comments from './Comments/Comments';

export const Post = ({id, name, content, date, theme, comments}) => {
    return (
        <>
            <div className={`${styles.basePost} ${theme === 'dark' ? styles.dark : null}`}>
                <UserLink id={id} name={name} className={`${styles.basePostLink} ${theme === 'dark' ? styles.dark : null}`}/>
                <p className={`${styles.basePostContent} ${theme === 'dark' ? styles.dark : null}`}>{content}</p>
                <p className={`${styles.basePostDate} ${theme === 'dark' ? styles.dark : null}`}>{date}</p>
            </div>
            <Comments postId = {id} comments={comments}></Comments>
        </>
    );
}

Post.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
}

export default withTheme(Post);
