import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Course from './pages/Course';
import NewCourse from './pages/NewCourse';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/course" component={Course} />
        <Route path="/new-course" component={NewCourse} />
      </Switch>
    </BrowserRouter>
  )
}