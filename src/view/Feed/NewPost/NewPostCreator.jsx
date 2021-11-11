import React from 'react';
import { connect } from 'react-redux';
import { mapNPCDispatchToProps, mapNPCStateToProps } from '../../mappers/mappers';
import {useNavigate} from 'react-router-dom';
import styles from './NPC.css'
import withTheme from '../../theme/withTheme';

const NewPostCreator = ({onSendNewPost, onSetPostContent, newPostError, content}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.baseNPC}>
            <form onSubmit={onSendNewPost(content, navigate)} className={styles.baseNPCForm}>
                <label className={styles.baseNPCLabel}>Content:</label>
                <input type="text" onChange={onSetPostContent} className={styles.baseNPCInput}/>
                <button type={'submit'} className={styles.baseNPCButton}>Create Post!</button>
            </form>
        </div>
    );
}

const ConnectedNPC = connect(mapNPCStateToProps, mapNPCDispatchToProps)(NewPostCreator);

export default withTheme(ConnectedNPC);
