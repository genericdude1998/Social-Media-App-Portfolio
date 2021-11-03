import React from 'react';

export function useLoginForm(){
    const [m_username, setUsername] = React.useState('');
    const [m_password, setPassword] = React.useState('');

    function setForm(username,password){
        setUsername(username);
        setPassword(password);
    }

    return [m_username,m_password, setForm];
}