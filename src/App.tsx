import React from "react";
import Header from "./modules/components/Header";
import CourseSave from "./modules/pages/courses/CourseSave";
import { Routes, Route } from "react-router-dom";
import CourseList from "./modules/pages/courses/CourseList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<p>Página de inicio en construcción</p>} />
          <Route path="*" element={<p>Página de inicio en construcción</p>} />
          <Route path="/course/list" element={<CourseList />} />
          <Route path="/course/save/:idCourse" element={<CourseSave />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
