import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo_big.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();

    try {
      fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        return res;
      })
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem('authorizedEmail', email);
          history.push('/course');
          setLoginError(data.statusText);
        } else{
          setLoginError(data.statusText);
        }
      });
    }catch(err){
      alert(err);
    }
  }

  return(
    <div className="login-container">
      <img src={logoImg} alt="Imagem de Logo"/>

      <section className="form">
        <form action="" onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            name="email"
            type="email"
            value={email}
            autoFocus
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            name="password"
            type="password"
            value={password}
            required
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">ACESSAR</button>

          {loginError && <p style={{color: 'red'}}>{loginError}</p>}
        </form>
      </section>
    </div>
  )
};