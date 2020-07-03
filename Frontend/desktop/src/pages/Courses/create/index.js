import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../../services/api';
import {useHistory} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'

export default function CourseUpdate(){
    const [name, setName] = useState('')
    const [teachers, setTeachers] = useState('')
    const [room, setRoom] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const history = useHistory();

    async function createCourse(event){
        event.preventDefault();

        try {
            const data = {
                name,
                teachers,
                room,
                start,
                end
            }

            const create = await api.post('/courses', data)

            const message = create.data;
            const status = create.status;

            if(status != 200){
                return alert(message)
           } else {
               alert(message)
               history.push('/courses')
           }

        } catch (error) {
            alert(error, "Falha ao cadastrar")
        }
    }

    function home(){
        history.push('/courses');
    }

    return(
        <div className="container create">
            <button onClick={home} className="home" type="button" >
                            <FiHome size={40} color="#000" />
            </button>
            <div className="row">
                <h2>Cadastro do curso</h2>
            </div>
            <div className="content create">
                    <form onSubmit={createCourse}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label for="inputName">Nome:</label>
                        <input type="name" 
                        className="form-control" 
                        id="inputName" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label for="inputTeacher">Professor(es):</label>
                        <input type="teachers"
                         className="form-control"
                         id="inputTeacher" 
                         value={teachers}
                         onChange={event => setTeachers(event.target.value)}
                         />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label for="inputRoom">Sala:</label>
                        <input type="room"
                        className="form-control" 
                        id="inputRoom" 
                        value={room}
                        onChange={event => setRoom(event.target.value)}
                        />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputStart">Horário de início:</label>
                        <input type="start" 
                        className="form-control" 
                        id="inputStart" 
                        value={start}
                        onChange={event => setStart(event.target.value)}
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputEnd">Término:</label>
                        <input type="end" 
                        className="form-control" 
                        id="inputEnd"
                        value={end}
                        onChange={event => setEnd(event.target.value)}
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-secondary"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}