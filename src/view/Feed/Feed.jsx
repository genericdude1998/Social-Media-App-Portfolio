import React from 'react';
import { connect } from 'react-redux';
import { mapFeedDispatchToProps, mapFeedStateToProps } from '../mappers/mappers';
import Post from './Post';

const Feed = ({posts, onFetchPosts}) => {
    React.useEffect(() => {
        onFetchPosts();
    }, []);
    const list = posts.module;
    return (
        <div>
            <ul>
                {list ? list.map(post => {
                    return (<li key={post.id}>
                        <Post name={post.name} content={post.content}/>
                    </li>)
                }): null}
            </ul>
        </div>
    );
}

const ConnectedFeed = connect(mapFeedStateToProps, mapFeedDispatchToProps)(Feed);

export default ConnectedFeed;
