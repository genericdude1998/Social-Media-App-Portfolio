import React from 'react';

const Post = ({name, content}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Post;
