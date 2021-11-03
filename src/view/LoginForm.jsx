import React from 'react';
import { useLoginForm } from '../customHooks/customHooks';

const LoginForm = () => {
    const [name, username, setForm] = useLoginForm();

    return (
        <div>
            Form
        </div>
    );
}

export default LoginForm;
