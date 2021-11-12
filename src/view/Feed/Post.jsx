import React from 'react';
import styles from './Post.css';
import PropTypes from 'prop-types';
import UserLink from './UserLink';
import withTheme from '../theme/withTheme';
import Comments from './Comments/Comments';
import { connect } from 'react-redux';
import { mapCommentsDispatchToProps } from '../mappers/mappers';
import ToggleComments from './Comments/ToggleComments';

export const Post = ({id, name, content, date, theme, comments, openComments, onCloseComments, onOpenComments}) => {
    return (
        <>
            <div className={`${styles.basePost} ${theme === 'dark' ? styles.dark : null}`}>
                <UserLink id={id} name={name} className={`${styles.basePostLink} ${theme === 'dark' ? styles.dark : null}`}/>
                <p className={`${styles.basePostContent} ${theme === 'dark' ? styles.dark : null}`}>{content}</p>
                <p className={`${styles.basePostDate} ${theme === 'dark' ? styles.dark : null}`}>{date}</p>
            </div>
            {comments.length !== 0 ?
                <ToggleComments comments={comments} postId={id} openComments={openComments} onOpenComments={onOpenComments} onCloseComments={onCloseComments}/>
                :
                null
            }
            {openComments ? 
                <Comments postId = {id} comments={comments}></Comments>
                :
                null
            }
        </>
    );
}

Post.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
}

const ConnectedPost = connect(undefined, mapCommentsDispatchToProps)(Post)

export default withTheme(ConnectedPost);
