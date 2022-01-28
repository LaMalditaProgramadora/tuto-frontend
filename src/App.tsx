import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './modules/components/Header';

import CourseSave from './modules/pages/courses/CourseSave';
import CourseList from './modules/pages/courses/CourseList';
import './App.css';

const Courses = React.lazy(() => import('./modules/pages/courses/Courses'));

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<p>Página de inicio en construcción</p>} />
          <Route path="*" element={<p>Página de inicio en construcción</p>} />
          <Route
            path="course"
            element={
              <React.Suspense fallback={<>...</>}>
                <Courses />
              </React.Suspense>
            }
          >
            <Route index element={<CourseList />} />
            <Route path="list" element={<CourseList />} />
            <Route path="save/:idCourse" element={<CourseSave />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
