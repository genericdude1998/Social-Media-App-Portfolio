import React from 'react';
import { connect } from 'react-redux';
import { mapNPCDispatchToProps, mapNPCStateToProps } from '../../mappers/mappers';
import {useNavigate} from 'react-router-dom';
import styles from './NPC.css'
import withTheme from '../../theme/withTheme';
import PropTypes from 'prop-types';

const NewPostCreator = ({onSendNewPost, onSetPostContent, content, theme}) => {
    const navigate = useNavigate();
    return (
        <div className={`${styles.baseNPC} ${theme === 'dark' ? styles.dark : null}`}>
            <form onSubmit={onSendNewPost(content, navigate)} className={`${styles.baseNPCForm} ${theme === 'dark' ? styles.dark : null}`}>
                <label className={`${styles.baseNPCLabel} ${theme === 'dark' ? styles.dark : null}`}>Content:</label>
                <input type="text" onChange={onSetPostContent} className={`${styles.baseNPCInput} ${theme === 'dark' ? styles.dark : null}`}/>
                <button type={'submit'} className={`${styles.baseNPCButton} ${theme === 'dark' ? styles.dark : null}`}>Create Post!</button>
            </form>
        </div>
    );
}

NewPostCreator.propTypes = {
    onSendNewPost:PropTypes.func,
    onSetPostContent:PropTypes.func,
    newPostError:PropTypes.string,
    content:PropTypes.string,
    theme:PropTypes.string,
}


const ConnectedNPC = connect(mapNPCStateToProps, mapNPCDispatchToProps)(NewPostCreator);

export default withTheme(ConnectedNPC);
