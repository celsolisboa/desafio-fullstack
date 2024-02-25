import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";
import './CreateCourseStyle.css';
import { FaArrowLeft } from "react-icons/fa6";
import InputMask from 'react-input-mask';

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
    const [successMessage, setSuccessMessage] = useState('');

    const createCourse = async (e) => {
        e.preventDefault()
        try {
            const body = {
                curso: course, professor: teacher.map(option => option.label).join(' e '),
                sala: room.map(option => option.label).join(' e '),
                horainicio: start, horatermino: end
            };
            const response = await fetch('http://localhost:4000/criar_curso', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            console.log(response);
            setSuccessMessage('Curso cadastrado com sucesso!');
            setCourse('');
            setTeacher([]);
            setRoom([]);
            setStart('');
            setEnd('');
            // Limpar a mensagem de sucesso após 3 segundos
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
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
                            <InputMask
                                id='horaInicio'
                                mask="99:99"
                                maskChar="_"
                                value={start}
                                onChange={(e) => setStart(e.target.value)}
                                placeholder="Início"
                                required
                            />
                        </div>
                        <div className="end">
                            <InputMask
                                id='horaTermino'
                                mask="99:99"
                                maskChar="_"
                                value={end}
                                onChange={(e) => setEnd(e.target.value)}
                                placeholder="Fim"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button id='save-btn' type="submit" >Salvar</button>
                {successMessage && <p>{successMessage}</p>}
            </form>
        </div>
    );
};

export default CreateCourse;
