import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
import {FiMail, FiKey} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
const empty = require('is-empty')

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function Login(event){
        event.preventDefault();

        try {
            const data = {
                email,
                password
            }

            const login = await api.post('/login', data); 

            const status = login.status;
            const message = login.data;

            if(status != 200){
                 return alert(message)
            } else {
                alert(message)
            }

            history.push('/courses')

        } catch (error) {
            alert('Falha no login, tente novamente.')   
        }
    }

    return(
        <div className="content">
            <div className="login-container">
                <h2>Login</h2>

                <div className="login-content">
                    <form onSubmit={Login}>
                        <div class="input-group email">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                    <FiMail size={20} color="#fff" />
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                    <FiKey size={20} color="#fff" />
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary"> Entrar </button>
                        </form>
                </div>
            </div>
        </div>
    )
}