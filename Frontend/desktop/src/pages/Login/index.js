import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
const empty = require('is-empty')

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function Login(event){
        event.preventDefault();

        try {
            const body = email;

            const data = {
                email,
                password
            }

            if(empty(email)){
                alert("O campo 'email' está vazio.")
            }
      
            if(empty(password)){
                alert("O campo 'senha' está vazio.")
            }

            const login = await api.post('/login', data); 

            const status = login.status;
            const message = login.data;

            if(status != 200){
                 return alert(message)
            } else {
                alert(message)
            }

            
        } catch (error) {
            
        }
    }
}