import React, { useState } from 'react';
import '../App.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Senha:', senha);
    };

    return (
        <div id='container'>
            <h2>Login</h2>
            <div>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Email'
                />
            </div>
            <div>
                <input
                    type="password"
                    id="password"
                    value={senha}
                    onChange={handleSenhaChange}
                    placeholder='Senha'
                />
            </div>
            <button id='login-btn' onClick={handleLogin}>Acessar</button>
        </div>
    );
};

export default LoginPage;
