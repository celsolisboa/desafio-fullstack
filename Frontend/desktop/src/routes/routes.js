import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login'
import CourseCreate from "../pages/Courses/create";
import CourseUpdate from "../pages/Courses/update";
import Courses from "../pages/Courses/readall";

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/update/" component={CourseUpdate} />
        <Route path="/courses/create" exact component={CourseCreate} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;