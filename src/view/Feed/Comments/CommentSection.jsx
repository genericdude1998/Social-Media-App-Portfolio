import React from 'react';
import ToggleComments from './ToggleComments';
import Comments from './Comments';

const CommentSection = ({comments, postId, openComments, onOpenComments, onCloseComments}) => {
    return (
        <div>
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

export default CommentSection;
