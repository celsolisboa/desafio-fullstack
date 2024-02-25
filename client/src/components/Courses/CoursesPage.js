import React, { useState, useEffect } from 'react';
import './CoursesPageStyle.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CursosPage = () => {
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        try {
            const response = await fetch('http://localhost:4000/cursos');
            const data = await response.json();
            console.log(data)
            setCourses(data);
        } catch (error) {
            console.error('Erro ao buscar cursos:', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            await fetch(`http://localhost:4000/cursos/${id}`, {
                method: 'DELETE',
            });
            setCourses(courses.filter((course) => course.id !== id));
        } catch (error) {
            console.error('Erro ao deletar curso:', error);
        }
    }

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div>
            <div id='title_course'>
                <h2>Cursos</h2>
                <Link to='/detalhes'>
                    <FaPlus size={40} style={{ marginRight: '10px', cursor: 'pointer', color: 'black' }} />
                </Link>
            </div>
            <div id='container_courses'>
                {courses.map((course) => (
                    <div key={course.id} id='box_courses'>
                        <div id='course_name'>
                            <h3>{course.curso}</h3>
                            <FaRegTrashCan size={30} style={{ cursor: 'pointer' }} onClick={() => deleteCourse(course.id)} />
                        </div>
                        <div id='teacher'>
                            <p>{course.professor}</p>
                        </div>
                        <div id='room_hour_div'>
                            <div id='room'>
                                <p>Sala {course.sala}</p>
                            </div>
                            <div id='hours'>
                                <p>{course.horainicio}</p>
                                <p>&nbsp;às&nbsp;</p>
                                <p>{course.horatermino}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CursosPage;
