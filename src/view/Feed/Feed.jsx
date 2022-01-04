import React from 'react';
import { connect } from 'react-redux';
import { mapFeedDispatchToProps, mapFeedStateToProps } from '../mappers/mappers';
import Post from './Post';
import styles from './Feed.css';
import PropTypes from 'prop-types';
import withTheme from '../theme/withTheme';
import ProgressBar from './ProgressBar';

export const Feed = ({posts, onFetchPosts, loading, theme, percentage}) => {
    React.useEffect(() => {
        onFetchPosts();
    }, []);
    return (
        <div className={`${styles.baseFeed} ${theme === 'dark' ? styles.dark : null}`}>
            <ul>
                {loading ? <ProgressBar label={'Loading:'} max={'100'} percentage={percentage}/>:
                    posts.map(post => {
                        return (<li key={post.id}>
                            <Post 
                                id={post.id}
                                name={post.name} 
                                content={post.content} 
                                date={post.date} 
                                comments={post.comments}
                                openComments={post.openComments}/>
                        </li>)
                    })}
            </ul>
        </div>
    );
}

Feed.propTypes = {
    posts: PropTypes.array,
    onFetchPosts: PropTypes.func,
    theme: PropTypes.string,
}

Feed.defaultProps = {
    posts: [],
}


const ConnectedFeed = connect(mapFeedStateToProps, mapFeedDispatchToProps)(Feed);

export default withTheme(ConnectedFeed);
