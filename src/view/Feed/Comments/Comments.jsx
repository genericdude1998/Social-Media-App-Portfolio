import React from 'react';
import { connect } from 'react-redux';
import { mapCommentsDispatchToProps } from '../../mappers/mappers';

const Comments = ({comments, postId}) => {
    return (
        <div>
            <ul>
                {comments.map(comment => {
                    return(
                        <li key={postId}>
                            <h5>
                                {comment.name}
                            </h5>
                            <p>
                                {comment.content}
                            </p>
                            <p>
                                {comment.date}
                            </p>
                        </li>
                    )
                })}   
            </ul>
        </div>
    );
}

export default Comments;
