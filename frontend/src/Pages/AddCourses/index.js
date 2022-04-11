import React, {useState}  from 'react';
import Escopo from '../../components/Header';
import api from '../../Services/api';
import InputMask from 'react-input-mask';
import {useNavigate} from 'react-router-dom';

import './styles.css';

export default function AddCourses(){

    const [name, setName] = useState();
    const [teacher, setTeacher] = useState();
    const [beginning, setBeginning] = useState();
    const [end, setEnd] = useState();
    const [classRoom, setClassRoom] = useState();

    const navigate = useNavigate();

    const data = {
        name,
        teacher,
        beginning,
        end,
        classRoom
    }

    async function handleInsertCourses(e){
        e.preventDefault();

        try{
            console.log(data)
            await api.post('/courses', data)
            
        }catch (err) {
            console.log(e.err)
        }

        navigate('/courses');
    }
    
    return(
        
        <body>
        <Escopo title="Detalhe do Curso" isAddCoursePage={false}/> 

        <div className='add-courses-container'>
            <form onSubmit={handleInsertCourses}>
                <fieldset>
                    <input
                        className='course'
                        placeholder='Nome do Curso'
                        name = "nome"
                        id = "nome"
                        required
                        value = { name }
                        onChange = { e => setName( e.target.value)}
                    />
                
                    <select
                        className='teacher'
                        required
                        value = {teacher}
                        onChange = { e => setTeacher(e.target.value) }>

                        <option value="" disabled selected hidden>Selecione o Professor</option>

                        <option value="PROFESSOR A">Professor A</option>
                        <option value="PROFESSOR B">Professor B</option>
                        <option value="PROFESSOR C">Professor C</option>
                    
                    </select> 
                </fieldset>

                <fieldset>
                    <select 
                        className='class'
                        required
                        value = {classRoom}
                        onChange = { e => setClassRoom(e.target.value) }>

                        <option value="" disabled selected hidden>Selecione a Sala</option>

                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                    
                    </select> 

                    <div className='input-group'>
                                        
                        <InputMask
                            className='initial-date'
                            placeholder="Inicio"
                            mask = "99:99"
                            name = "beginning"
                            id = "beginning"
                            required
                            value = { beginning }
                            onChange = { e => setBeginning( e.target.value)}
                        />
                    
                        <InputMask
                            className='final-date'
                            placeholder="Fim"
                            mask = "99:99"
                            name = "end"
                            id = "end"
                            required
                            value = { end }
                            onChange = { e => setEnd( e.target.value)}
                        />

                    </div>


                </fieldset>
                <div className='button-container'> 
                    <button className="button" type="submit">Entrar</button>
                </div>
    
            </form>
        </div>
    </body>   
);
}