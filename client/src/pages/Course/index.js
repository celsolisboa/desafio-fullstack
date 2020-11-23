import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

export default function Course(){
  const loggedUser = localStorage.getItem('authorizedEmail');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('courses').then(res => setCourses(res.data));
  }, [loggedUser]);

  async function handleDeleteCourse(id) {
    try {
      await api.delete(`courses/${id}`)
    }catch(err){
      alert(err);
    }
  }

  return(
    <div>
      <Header title="Cursos" text="Criar" link="/new-course"/>
      <main className="course-container">
        <h1>Bem Vindo, {loggedUser.split('@')[0]}</h1>
        <ul>
        {courses ? courses.map(course =>  (
          <li key={course.course_title}>
            <p>{course.course_title}</p>
            <p>Prof alvares de azevedo</p>
            <p>sala 502</p>
            <p>{course.time_start} as {course.time_end}</p>
            <button type="button" onClick={() => handleDeleteCourse(course.id)}>
              <FiX size={20}/>
            </button>
          </li>
          )) : (
            <h1>Nenhum curso cadastrado</h1>
          )}
        </ul>
      </main>
    </div>
  )
}