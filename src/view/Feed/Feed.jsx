import React from 'react';
import { connect } from 'react-redux';
import { mapFeedDispatchToProps, mapFeedStateToProps } from '../mappers/mappers';

const Feed = ({posts, onFetchPosts}) => {
    React.useEffect(() => {
        onFetchPosts('');
    }, []);
    return (
        <div>
            
        </div>
    );
}

const ConnectedFeed = connect(mapFeedStateToProps, mapFeedDispatchToProps)(Feed);

export default ConnectedFeed;
