import React from 'react';
import ToggleComments from './ToggleComments';
import Comments from './Comments';
import ConnectedNCC from './NewCommentCreator';
import { useNavigate } from 'react-router';

const CommentSection = ({comments, postId, openComments, onOpenComments, onCloseComments}) => {
    return (
        <div>
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

export default CommentSection;
