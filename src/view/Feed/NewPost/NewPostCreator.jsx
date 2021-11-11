import React from 'react';
import { connect } from 'react-redux';
import { mapNPCDispatchToProps, mapNPCStateToProps } from '../../mappers/mappers';

const NewPostCreator = ({onSendNewPost, newPostError, content}) => {
    return (
        <div>
            <form onSubmit={onSendNewPost(content)}>
                <label>Content:</label>
                <br />
                <input type="text"/>
                <br />
                <button type={'submit'}>Create Post!</button>
            </form>
        </div>
    );
}

const ConnectedNPC = connect(mapNPCStateToProps, mapNPCDispatchToProps)(NewPostCreator);

export default ConnectedNPC;
