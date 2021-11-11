import React from 'react';
import { connect } from 'react-redux';
import { mapFeedDispatchToProps, mapFeedStateToProps } from '../mappers/mappers';
import Post from './Post';
import styles from './Feed.css';
import PropTypes from 'prop-types';
import withTheme from '../theme/withTheme';

const Feed = ({posts, onFetchPosts, theme}) => {
    React.useEffect(() => {
        onFetchPosts();
    }, []);
    return (
        <div className={styles.baseFeed}>
            <ul>
                {posts ? posts.map(post => {
                    return (<li key={post.id}>
                        <Post id={post.id}name={post.name} content={post.content} date={post.date}/>
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
const ConnectedFeedWithTheme = withTheme(ConnectedFeed);

export default ConnectedFeedWithTheme;
