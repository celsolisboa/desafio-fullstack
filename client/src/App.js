import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import CoursesPage from './components/Courses/CoursesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;