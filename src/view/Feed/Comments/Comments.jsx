import React from 'react';
import { connect } from 'react-redux';
import { mapCommentsDispatchToProps } from '../../mappers/mappers';
import styles from './Comments.css';
import withTheme from '../../theme/withTheme';

const Comments = ({comments, postId, theme}) => {
    return (
        <div>
            <ul className={`${styles.baseCommentsList} ${theme === 'dark' ? styles.dark : null}`}>
                {comments.map((comment, index) => {
                    return(
                        <li className={`${styles.baseComment} ${theme === 'dark' ? styles.dark : null}`} key={postId + index}>
                            <h5 className={`${styles.baseName} ${theme === 'dark' ? styles.dark : null}`}>
                                {comment.name}
                            </h5>
                            <p className={`${theme === 'dark' ? styles.dark : null}`}>
                                {comment.content}
                            </p>
                            <p className={`${styles.baseDate} ${theme === 'dark' ? styles.dark : null}`}>
                                {comment.date}
                            </p>
                        </li>
                    )
                })}   
            </ul>
        </div>
    );
}

export default withTheme(Comments);
