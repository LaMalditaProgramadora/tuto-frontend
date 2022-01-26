import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import Loading from "../../_components/loading/Loading";
import { Course } from "../../_model/Course";
import CourseService from "../../_service/CourseService";

const CourseSave = () => {
  const courseInit: Course = {
    idCourse: 0,
    name: "",
    code: "",
    sections: [],
  };

  const { idCourse } = useParams();
  const [course, setCourse] = useState(courseInit);
  const [hiddenModal, setHiddenModal] = useState(true);
  const courseService = new CourseService();

  const save = () => {
    setHiddenModal(false);
    courseService.save(course).then((result) => {
      setHiddenModal(true);
      console.log(result.data);
    });
  };

  const listById = () => {
    if (idCourse !== "0") {
      courseService.listById(idCourse).then((result) => {
        setCourse(result.data);
      });
    }
  };

  const handleInputChange = (event: any) => {
    let courseAux = { ...course, [event.target.name]: event.target.value };
    setCourse(courseAux);
  };

  useEffect(() => {
    listById();
  });

  return (
    <>
    <Loading hidden={hiddenModal}></Loading>
      <div className="page-title">
        <h2>Curso</h2>
        <button
          type="button"
          className="nes-btn is-error red-button"
          onClick={save}
        >
          ! Guardar
        </button>
      </div>
      <div className="form">
        <div className="nes-field field">
          <label htmlFor="code_field">Código</label>
          <input
            name="code"
            value={course.code}
            onChange={handleInputChange}
            type="text"
            id="code_field"
            className="nes-input is-rounded nes-container"
            placeholder="Escriba el código del curso"
          />
        </div>
        <div className="nes-field field">
          <label htmlFor="name_field">Nombre</label>
          <input
            name="name"
            value={course.name}
            onChange={handleInputChange}
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
