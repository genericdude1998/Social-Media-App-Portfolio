import React from 'react';
import styles from './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className={styles.baseDiv}>
            <form className={styles.baseForm}>
                <label className={styles.baseLabel}>Username:</label>
                <input type='text' className={styles.baseInput}/>
                <label className={styles.baseLabel}>Password:</label>
                <input type='text'/>
                <button type='submit' className={styles.baseButton}>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
