import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";
import './CreateCourseStyle.css';
import { FaArrowLeft } from "react-icons/fa6";

const teacherOptions = [
    { label: 'Prof. Álvares de Azevedo', value: 'Prof. Álvares de Azevedo' },
    { label: 'Prof. Mario de Andrade', value: 'Prof. Mario de Andrade' },
    { label: 'Prof. Ruy Barbosa', value: 'Prof. Ruy Barbosa' },
    { label: 'Prof. Agatha Christie', value: 'Prof. Agatha Christie' },
    { label: 'Prof. Mário Quintana', value: 'Prof. Mário Quintana' },
];

const roomOptions = [
    { label: 600, value: 600 },
    { label: 601, value: 601 },
    { label: 602, value: 602 },
    { label: 603, value: 603 },
    { label: 604, value: 604 },
];

const CreateCourse = () => {
    const [course, setCourse] = useState('');
    const [teacher, setTeacher] = useState([]);
    const [room, setRoom] = useState([]);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const createCourse = async (e) => {
        e.preventDefault()
        console.log('Dados do curso:', {
            course,
            teacher: teacher.map(option => option.label).join(','),
            room: room.map(option => option.label)[0],
            start,
            end
        });
        try {
            const body = {
                curso: course, professor: teacher.map(option => option.label).join(' e '),
                sala: room.map(option => option.label).join(' e '),
                horainicio: start, horatermino: end
            };
            const response = await fetch('http://localhost:4000/detalhes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            console.log(response);
        } catch (error) {
            console.error('Erro ao criar curso:', error);
        };
    };

    return (
        <div id="cadastro_curso">
            <div id='title_create_course'>
                <Link to='/cursos'>
                    <FaArrowLeft size={40} style={{ marginLeft: '10px', cursor: 'pointer', color: 'black' }} />
                </Link>
                <h2>Cadastro de Curso</h2>
            </div>
            <form onSubmit={createCourse}>
                <div id='container_1'>
                    <div className="campo">
                        <input
                            type="text"
                            id="disciplina"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder='Diciplina'
                            required
                        />
                    </div>
                    <div className="campo">
                        <MultiSelect
                            options={teacherOptions}
                            value={teacher}
                            onChange={setTeacher}
                            labelledBy="Select"
                            overrideStrings={{ selectSomeItems: 'Professores' }}
                        />
                    </div>
                </div>
                <div id='container_2'>
                    <div className="room_div">
                        <MultiSelect
                            options={roomOptions}
                            value={room}
                            onChange={setRoom}
                            labelledBy="Select"
                            overrideStrings={{ selectSomeItems: 'Salas' }}
                            className="custom-multiselect"
                        />
                    </div>
                    <div id='time_container'>
                        <div className="start">
                            <input
                                type="time"
                                id="horaInicio"
                                value={start}
                                onChange={(e) => setStart(e.target.value)}
                                required
                            />
                        </div>
                        <div className="end">
                            <input
                                type="time"
                                id="horaTermino"
                                value={end}
                                onChange={(e) => setEnd(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button id='save-btn' type="submit" >Salvar</button>
            </form>
        </div>
    );
};

export default CreateCourse;
