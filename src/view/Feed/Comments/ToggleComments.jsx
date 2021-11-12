import React from 'react';

const ToggleComments = ({comments, postId, openComments ,onOpenComments, onCloseComments}) => {
    return (
        !openComments ? 
            <button onClick={() => onOpenComments(postId)}>Open Comments</button> 
            : 
            <button onClick={() => onCloseComments(postId)}>Close Comments</button>
    );
}

export default ToggleComments;
