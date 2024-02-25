import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import CoursesPage from './components/Courses/CoursesPage';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/detalhes" element={<CreateCourse />} />
      </Routes>
    </Router>
  );
}

export default App;