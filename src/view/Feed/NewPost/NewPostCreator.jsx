import React from 'react';
import { connect } from 'react-redux';
import { mapNPCDispatchToProps, mapNPCStateToProps } from '../../mappers/mappers';
import {useNavigate} from 'react-router-dom';

const NewPostCreator = ({onSendNewPost, onSetPostContent, newPostError, content}) => {
    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={onSendNewPost(content, navigate)}>
                <label>Content:</label>
                <br />
                <input type="text" onChange={onSetPostContent}/>
                <br />
                <button type={'submit'}>Create Post!</button>
            </form>
        </div>
    );
}

const ConnectedNPC = connect(mapNPCStateToProps, mapNPCDispatchToProps)(NewPostCreator);

export default ConnectedNPC;
