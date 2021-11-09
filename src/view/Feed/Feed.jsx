import React from 'react';
import { connect } from 'react-redux';
import { mapFeedDispatchToProps, mapFeedStateToProps } from '../mappers/mappers';
import Post from './Post';
import styles from './Feed.css'

const Feed = ({posts, onFetchPosts}) => {
    React.useEffect(() => {
        onFetchPosts();
    }, []);
    const list = posts.module;
    return (
        <div className={styles.baseFeed}>
            <ul>
                {list ? list.map(post => {
                    return (<li key={post.id}>
                        <Post name={post.name} content={post.content} date={post.date}/>
                    </li>)
                }): null}
            </ul>
        </div>
    );
}

const ConnectedFeed = connect(mapFeedStateToProps, mapFeedDispatchToProps)(Feed);

export default ConnectedFeed;
