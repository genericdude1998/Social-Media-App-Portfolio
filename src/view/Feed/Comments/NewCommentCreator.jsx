import React from 'react';
import { connect } from 'react-redux';
import { mapNCCDispatchToProps, mapNCCStateToProps } from '../../mappers/mappers';
import styles from './NCC.css';
import withTheme from '../../theme/withTheme';
import PropTypes from 'prop-types';

const NewCommentCreator = ({onSendNewComment, onSetCommentContent, content, postId, theme}) => {
    return (
        <div className = {`${styles.baseNCC} ${theme === 'dark' ? styles.dark : null}`}>
            <form className = {styles.baseNCCForm}onSubmit={onSendNewComment(content, postId)}>
                <label className={`${styles.baseNCCLabel} ${theme === 'dark' ? styles.dark : null}`}>Comment</label>
                <input className={styles.baseNCCInput}type="text" onChange={onSetCommentContent}/>
                <button className={styles.baseNCCButton} type={'submit'}>Send Comment</button>
            </form>
        </div>
    );
}

NewCommentCreator.propTypes = {
    onSendNewComment:PropTypes.func,
    onSetCommentContent:PropTypes.func,
    content:PropTypes.string,
    postId:PropTypes.number,
    theme:PropTypes.string,
}

const ConnectedNCC = connect(mapNCCStateToProps, mapNCCDispatchToProps)(NewCommentCreator)

export default  withTheme(ConnectedNCC);
