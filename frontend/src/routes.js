
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './Pages/Logon';
import Courses from './Pages/ListCourses';
import AddCourses from './Pages/AddCourses';

export default function AllRoutes(){
    return(
        <BrowserRouter>

            <Routes>
                <Route exact path="/" element={<Logon/>} />
                <Route exact path="/courses" element={<Courses/>} />
                <Route exact path="/create-courses" element={<AddCourses/>} />
            </Routes>
            
        </BrowserRouter>
    );
}