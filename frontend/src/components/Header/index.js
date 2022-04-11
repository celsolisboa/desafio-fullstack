import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import './styles.css';

export default function Courses({ title, isAddCoursePage}){
    
    const navigate = useNavigate();

    function handleCreateCourses(){
        navigate('/create-courses');
    }
    
    return(
        <>
            <div id="escopo">
                <header>
                    <span>{title}</span>

                    {
                        isAddCoursePage &&
                            <button onClick={handleCreateCourses} type="button">
                                <FiPlus size={30} color="#34cb79" />
                            </button>
                    }
                    
                </header>
            </div>
        </>  
    );
}
