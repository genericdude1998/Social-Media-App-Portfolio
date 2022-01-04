import React from 'react';
import ToggleComments from './ToggleComments';
import Comments from './Comments';
import ConnectedNCC from './NewCommentCreator';
import styles from './CommentsSection.css'
import withTheme from '../../theme/withTheme';
import PropTypes from 'prop-types';

const CommentSection = ({comments, postId, openComments, onOpenComments, onCloseComments, theme}) => {
    return (
        <div className = {`${styles.baseCommentsSection} ${theme === 'dark' ? styles.dark : null}`}>
            <ConnectedNCC postId={postId}/>
            {comments.length !== 0 ?
                <ToggleComments comments={comments} postId={postId} openComments={openComments} onOpenComments={onOpenComments} onCloseComments={onCloseComments}/>
                :
                null
            }
            {openComments ? 
                <Comments postId = {postId} comments={comments}></Comments>
                :
                null
            }
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.array,
    postId:PropTypes.number,
    openComments:PropTypes.bool,
    onOpenComments:PropTypes.func,
    onCloseComments:PropTypes.func,
    theme:PropTypes.string,
}

export default withTheme(CommentSection);
