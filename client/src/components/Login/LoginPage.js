import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para redirecionamento
import './LoginStyle.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState(''); // Estado para a mensagem

    const navigate = useNavigate(); // Instancia o hook useNavigate

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleLogin = () => {
        // Verifica se o email e a senha são válidos
        if (email === 'test@example.com' && senha === 'senha123') {
            // Se for válido, redireciona para a página de cursos
            navigate('/cursos');
        } else {
            // Se for inválido, exibe uma mensagem de erro
            setMensagem('Email ou senha inválidos. Por favor, tente novamente.');
        }
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
            <p>{mensagem}</p>
        </div>
    );
};

export default LoginPage;
