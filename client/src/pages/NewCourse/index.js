import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

export default function NewCourse() {
  const [nomeCurso, setNomeCurso] = useState('');
  const [professores, setProfessores] = useState([]);
  const [salas, setSalas] = useState([]);
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  const history = useHistory();

  async function handleNewCourse(e) {
    e.preventDefault();

    const data = {
      tablename: "courses",
      data: {
        course_title: nomeCurso,
        time_start: inicio,
        time_end: fim
      }
    };

    try {
      console.log(data)

      const response = await api.post('add', data);
      alert(`Curso salvo com sucesso! Status: ${response.data.status}`);
      history.push('/course');
    }catch(err){
      alert(err);
    }
  }

  return (
    <div>
      <Header title="Criar Curso"text="Voltar" link="/course"/>
      <main className="add-container">
        <form onSubmit={handleNewCourse}>
          <input
            placeholder="Nome do Curso"
            value={nomeCurso}
            onChange={e => setNomeCurso(e.target.value)}
          />
          <input
            placeholder="Professores"
            value={professores}
            onChange={e => setProfessores(e.target.value)}
          />
          <input
            placeholder="Salas"
            value={salas}
            onChange={e => setSalas(e.target.value)}
          />
          <div className="schedule">
            <input
              placeholder="Inicio"
              value={inicio}
              onChange={e => setInicio(e.target.value)}
            />
            <input
              placeholder="Fim"
              value={fim}
              onChange={e => setFim(e.target.value)}
            />
          </div>
          <button className="button" type="submit">SALVAR</button>
      </form>
      </main>
    </div>
  )
}