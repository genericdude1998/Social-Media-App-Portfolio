import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {mapUserDispatchToProps, mapUserStateToProps} from '../mappers/mappers';

const User = ({onFetchUser, user}) => {
    const {id} = useParams();
    React.useEffect(() => {
        onFetchUser(id);
    }, [id]);
    return (
        <div>
            {user ?
                <>
                    <h1>{user.name}</h1>
                    <h3>City: {user.city}</h3>
                    <h3>Joined: {user.joined}</h3>
                    <h3>Description:</h3>
                    <p>{user.desc}</p>
                </>
                :
                <h1>Loading</h1>
            }
        </div>
    );
}

const ConnectedUser = connect(mapUserStateToProps, mapUserDispatchToProps)(User);

export default ConnectedUser;
