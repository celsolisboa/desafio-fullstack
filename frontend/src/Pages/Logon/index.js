import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export default function Logon(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    async function handleLogin(){
        navigate('/courses');
    }
    
    return(
        <>

            <div id="page">

                <div className = "logon-container">

                    <h1>Login</h1>

                    <form onSubmit={handleLogin}>
                        <div className="input-block">
                            <input
                                placeholder = "E-mail"
                                type= "email"
                                id= "email"
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                                required
                            />
                        </div>
 
                        <div className="input-block">
                            <input
                                placeholder = "Senha"
                                type= "password"
                                id = "password"
                                minLength={6}
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="button" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    );
}