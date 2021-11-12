import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { mapNCCDispatchToProps, mapNCCStateToProps } from '../../mappers/mappers';

const NewCommentCreator = ({onSendNewComment, onSetCommentContent, newCommentError, content, postId}) => {
    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={onSendNewComment(content,navigate, postId)}>
                <label htmlFor="">Comment</label>
                <input type="text" onChange={onSetCommentContent}/>
                <button type={'submit'}>Send Comment</button>
            </form>
        </div>
    );
}

const ConnectedNCC = connect(mapNCCStateToProps, mapNCCDispatchToProps)(NewCommentCreator)

export default ConnectedNCC;
