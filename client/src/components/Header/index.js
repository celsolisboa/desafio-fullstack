import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo_medium.png';
import './styles.css';

export default function Header(props) {
  return (
    <header className="header">
      <img src={logoImg} alt="Imagem de Logo"/>
      <h1>{props.title}</h1>
      <Link className="button" to={props.link}>{props.text}</Link>
    </header>
  )
}