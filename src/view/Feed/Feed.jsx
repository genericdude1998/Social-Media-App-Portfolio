import React from 'react';
import { connect } from 'react-redux';
import { mapFeedDispatchToProps, mapFeedStateToProps } from '../mappers/mappers';
import Post from './Post';
import styles from './Feed.css';
import PropTypes from 'prop-types';
import withTheme from '../theme/withTheme';

export const Feed = ({posts, onFetchPosts, theme}) => {
    React.useEffect(() => {
        onFetchPosts();
    }, []);
    return (
        <div className={`${styles.baseFeed} ${theme === 'dark' ? styles.dark : null}`}>
            <ul>
                {posts ? posts.map(post => {
                    return (<li key={post.id}>
                        <Post 
                            id={post.id}
                            name={post.name} 
                            content={post.content} 
                            date={post.date} 
                            comments={post.comments}
                            openComments={post.openComments}/>
                    </li>)
                }): <h1>Loading</h1>}
            </ul>
        </div>
    );
}

Feed.propTypes = {
    posts: PropTypes.array,
    onFetchPosts: PropTypes.func,
}


const ConnectedFeed = connect(mapFeedStateToProps, mapFeedDispatchToProps)(Feed);

export default withTheme(ConnectedFeed);
