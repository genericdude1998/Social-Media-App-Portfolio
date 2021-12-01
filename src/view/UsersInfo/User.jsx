import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {mapUserDispatchToProps, mapUserStateToProps} from '../mappers/mappers';
import withTheme from '../theme/withTheme';
import styles from './User.css';
import PropTypes from 'prop-types';


export const User = ({onFetchUser, user, theme}) => {
    const {id} = useParams();
    React.useEffect(() => {
        onFetchUser(id);
    }, [id]);
    return (
        <div className={`${styles.baseUser} ${theme === 'dark' ? styles.dark : null}`}>
            {user ? 
                <div className={`${styles.baseUserContent} ${theme === 'dark' ? styles.dark : null}`}>
                    <h1>{user.name}</h1>
                    <h3>City: {user.city}</h3>
                    <h3>Joined: {user.joined}</h3>
                    <h3>Description:</h3>
                    <p>{user.desc}</p>
                </div>
                :
                <h1>Loading</h1>
            }
        </div>
    );
}

User.propTypes = {
    onFetchUser:PropTypes.func,
    user:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        city:PropTypes.string,
        joined:PropTypes.string,
        desc:PropTypes.string,

    }),
    theme:PropTypes.string,
}

const ConnectedUser = connect(mapUserStateToProps, mapUserDispatchToProps)(User);

export default withTheme(ConnectedUser);
