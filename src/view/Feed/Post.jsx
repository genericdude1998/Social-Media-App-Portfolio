import React from 'react';
import styles from './Post.css';
import PropTypes from 'prop-types';
import UserLink from './UserLink';
import withTheme from '../theme/withTheme';
import { connect } from 'react-redux';
import { mapCommentsDispatchToProps } from '../mappers/mappers';
import CommentSection from './Comments/CommentSection';

export const Post = ({id, name, content, date, theme, comments, openComments, onCloseComments, onOpenComments}) => {
    return (
        <>
            <div className={`${styles.basePost} ${theme === 'dark' ? styles.dark : null}`}>
                <UserLink id={id} name={name} className={`${styles.basePostLink} ${theme === 'dark' ? styles.dark : null}`}/>
                <p className={`${styles.basePostContent} ${theme === 'dark' ? styles.dark : null}`}>{content}</p>
                <p className={`${styles.basePostDate} ${theme === 'dark' ? styles.dark : null}`}>{date}</p>
            </div>
            
            <CommentSection 
                comments={comments} 
                postId={id} 
                openComments={openComments} 
                onOpenComments={onOpenComments}
                onCloseComments={onCloseComments} 
            />
        </>
    );
}

Post.propTypes = {
    id:PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    theme:PropTypes.string,
    comments:PropTypes.array,
    openComments:PropTypes.bool,
    onCloseComments:PropTypes.func,
    onOpenComments:PropTypes.func, 
}

const ConnectedPost = connect(undefined, mapCommentsDispatchToProps)(Post)

export default withTheme(ConnectedPost);
