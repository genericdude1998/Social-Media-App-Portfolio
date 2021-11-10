import React from 'react';
import { connect } from 'react-redux';
import { mapNPCDispatchToProps, mapNPCStateToProps } from '../../mappers/mappers';

const NewPostCreator = ({onSendNewPost, newPostError}) => {
    return (
        <div>
            <button onClick={onSendNewPost('Hello content')}>Create Post</button>
        </div>
    );
}

const ConnectedNPC = connect(mapNPCStateToProps, mapNPCDispatchToProps)(NewPostCreator);

export default ConnectedNPC;
