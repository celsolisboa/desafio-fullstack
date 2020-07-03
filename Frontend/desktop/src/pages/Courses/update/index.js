import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../../services/api';
import {useHistory} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'

export default function CourseUpdate(){

    const course2 = JSON.parse(localStorage.getItem('course'))

    const [name, setName] = useState(course2.name)
    const [teachers, setTeachers] = useState(course2.teachers)
    const [room, setRoom] = useState(course2.room)
    const [start, setStart] = useState(course2.start)
    const [end, setEnd] = useState(course2.end)
    const history = useHistory()

    

    async function update(event) {
        event.preventDefault();
      
        try {    
            const data = {
                name,
                teachers,
                room,
                start,
                end
            }
                var CourseId = localStorage.getItem('CourseId');
                const update = api.put(`/courses/${CourseId}`, data)

                const message = (await update).data;
                const status = (await update).status;

                if(status != 200){
                    return alert(message)
               } else {
                   alert(message)
               }

               history.push('/courses')
               localStorage.removeItem('course')
        } catch (error) {
            alert(error)
        }
    }

    function home() {
        history.push('/courses')
        localStorage.removeItem('course')
    }

    return(
        <div className="container update">
            <button onClick={home} className="home" type="button" >
                            <FiHome size={40} color="#000" />
            </button>
            <div className="row">
                <h2>Informações do curso</h2>
            </div>
                <div className="content update">
                <form onSubmit={update}>
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
                <button type="submit" className="btn btn-secondary"> Atualizar </button>
            </form>
        </div>
        </div>
    )
}