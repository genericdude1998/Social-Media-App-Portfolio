import React from 'react';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div>
            <form>
                <label>Username:</label>
                <input type='text'/>
                <label>Username:</label>
                <input type='text'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
