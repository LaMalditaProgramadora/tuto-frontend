import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import CourseService from "../../_service/CourseService";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const courseService = new CourseService();

  const list = () => {
    courseService.list().then((results) => {
      setCourses(results.data);
    });
  };

  useEffect(() => {
    list();
  }, []);

  return (
    <>
      <div className="page-title">
        <h2>Cursos</h2>
        <Link to={"/course/save/0"}>
          <button type="button" className="nes-btn is-error red-button">
            + Agregar
          </button>
        </Link>
      </div>
      <div className="cards">
        {courses.map((_, indexRow) => (
          <div className="card" key={indexRow}>
            <div className="nes-container with-title is-rounded">
              <p className="title">SI418</p>
              <ul className="nes-list is-disc card-list">
                <li>
                  <p className="li-left-padding">Programación en Web</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
