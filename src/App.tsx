import "./App.css";
import Header from "./_components/header/Header";
import CourseSave from "./_pages/course/CourseSave";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from "./_pages/course/CourseList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="body-container">
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<p>Página de inicio en construcción</p>} />
              <Route path="*" element={<p>Página de inicio en construcción</p>} />
              <Route path="/course/list" element={<CourseList />} />
              <Route path="/course/save/:idCourse" element={<CourseSave />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
