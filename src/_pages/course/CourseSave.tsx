import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import { Course } from "../../_model/Course";
import CourseService from "../../_service/CourseService";

const CourseSave = () => {
  const { idCourse } = useParams();
  const [course, setCourse] = useState(new Course());
  const courseService = new CourseService();

  const save = (course: Course) => {
    /*
    courseService.save(course).then((result) => {
      console.log(result);
    });
    */
  };

  const listById = () => {
    const courseAux: Course = {
      idCourse: 0,
      name: "",
      code: "",
      sections: [],
    };
    if (idCourse !== "0") {
      courseService.listById(idCourse).then((result) => {
        //setCourse(result.data);
      });
    }
    setCourse(courseAux);
  };

  useEffect(() => {
    listById();
  }, []);

  return (
    <>
      <div className="page-title">
        <h2>Curso</h2>
        <button type="button" className="nes-btn is-error red-button">
          ! Guardar
        </button>
      </div>
      <div className="form">
        <div className="nes-field field">
          <label htmlFor="code_field">Código</label>
          <input
            value={course.code}
            type="text"
            id="code_field"
            className="nes-input is-rounded nes-container"
            placeholder="Escriba el código del curso"
          />
        </div>
        <div className="nes-field field">
          <label htmlFor="name_field">Nombre</label>
          <input
            value={course.name}
            type="text"
            id="name_field"
            className="nes-input is-rounded nes-container"
            placeholder="Escriba el nombre del curso"
          />
        </div>
      </div>
    </>
  );
};

export default CourseSave;
