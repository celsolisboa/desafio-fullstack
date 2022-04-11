import React, {useState, useEffect}  from 'react';
import Escopo from '../../components/Header';
import { FiTrash2 } from 'react-icons/fi'
import api from '../../Services/api';

import './styles.css';

export default function ListCourses(){
    const [ courses, setCourses] = useState([]);

    useEffect(() => {
        api.get('/courses').then(response => {
            setCourses(response.data);
        })
        .catch(error =>{
            console.error(error.message);
            alert("Não foi possivel carregar os Cursos!")
        })
        
    },[]);

    async function handleDeleteCourse(id) {
        try{
            await api.delete(`/courses/${id}`)
            setCourses(courses.filter(courses => courses.id !== id));

        }catch(error){
            console.error(error.message);
            alert("Não foi possivel carregar os Cursos!")
        }
    }
    
    return(
        
        <>
            <Escopo title="Cursos" isAddCoursePage={true}/> 
            <div className="courses-container">        
                <ul>
                    {courses.map(courses => (
                        <li key={courses.id}>
                            <strong className="title-order">{courses.name}</strong>
                            <p>{courses.teacher_id}</p>   
                            <div>
                                <p>Sala {courses.class_room}</p>
                                <div>
                                    <p>{courses.beginning} às {courses.end}</p>
                                </div>
                            </div>                     

                            <button onClick = {() => handleDeleteCourse(courses.id)} 
                                type="Submit" 
                                className="delete-courses"
                                >
                                <FiTrash2 size={30} color="#32215"/>
                            </button>  
                        </li>
                    ))}
                </ul>       
            </div> 
        </>
    );
}