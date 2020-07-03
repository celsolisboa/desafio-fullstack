import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../../services/api';
import {FiTrash2, FiEdit2, FiPlusCircle} from 'react-icons/fi';
import {useHistory} from 'react-router-dom'

export default function Courses(){
    const [courses , setCourses] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('/courses')
        .then(response => {
            setCourses(response.data)
        })
    }, [])

    async function handleDeleteCourse(id){
        try {
            await api.delete(`/courses/${id}`);
            setCourses(courses.filter(course => course.id !== id))
        } catch (error) {
            alert("Erro ao deletar o curso, tente novamente.")
        }
    }

    async function handleUpdateCourse(id){
        try {
            const CourseId = id;

            const headers = {
                attribute: 'id',
                body: CourseId
            }
            
            const res = await api.get('/coursesbyattributes', {headers})
            const res2 = (await res).data

            localStorage.setItem('course', JSON.stringify(res2))
            localStorage.setItem('CourseId', CourseId)
            history.push(`/courses/update/${CourseId}`)
        } catch (error) {
            alert("Erro ao atualizar o curso, tente novamente.")
        }
    }

    async function handleNewCourse(){
        history.push('/courses/create')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="courses">
                        <button onClick={handleNewCourse} className="new create" type="button">
                            <FiPlusCircle size={40} color="#fff" />
                        </button>
                        <h1>Cursos</h1>
                    </div>
                    </div>
                    <div className="row courses-container">
                        {courses.map(course => (
                            <div className="col-12 col-md-6" key={course.id}>
                                <div className="stylecourse">
                                <p className="name">{course.name}</p>
                                <p className="teachers"> Prof.(s): {course.teachers}</p>
                                <p className="room">Sala {course.room}</p>
                                <p className="schedule">{course.start} às {course.end}</p>
                                <button onClick={() => handleUpdateCourse(course.id)} className="edit" type="button">
                                    <FiEdit2 size={20} color="#fff" />
                                </button>
                                <button onClick={() => handleDeleteCourse(course.id)} className="trash" type="button">
                                    <FiTrash2 size={20} color="#fff" />
                                </button>
                                </div>
                            </div>
                        ))
                        }
                    </div>
            </div>
        </div>

    )
}