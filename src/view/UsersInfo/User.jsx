import React from 'react';
import { useParams } from 'react-router';

const User = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Name</h1>
            <p>City</p>
            <p>Joined</p>
        </div>
    );
}

export default User;
