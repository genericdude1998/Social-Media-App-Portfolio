import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {mapUserDispatchToProps, mapUserStateToProps} from '../mappers/mappers';

const User = ({onFetchUser, user}) => {
    const {id} = useParams();
    React.useEffect(() => {
        onFetchUser(id);
    }, []);
    return (
        <div>
            {user ?
                <>
                    <h1>{user.name}</h1>
                    <p>{user.city}</p>
                    <p>{user.joined}</p>
                </>
                :
                <h1>Loading</h1>
            }
        </div>
    );
}

const ConnectedUser = connect(mapUserStateToProps, mapUserDispatchToProps)(User);

export default ConnectedUser;
