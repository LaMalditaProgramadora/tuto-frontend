import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { Course } from "../../../core/models/Course";
import {
  listCourseById,
  saveCourse,
} from "../../../core/services/CourseService";

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

  const save = () => {
    setHiddenModal(false);
    saveCourse(course).then((result) => {
      setHiddenModal(true);
      console.log(result);
    });
  };

  const listById = () => {
    if (idCourse && idCourse !== "0") {
      listCourseById(Number.parseInt(idCourse)).then((result) => {
        setCourse(result);
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
    <Fragment>
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
    </Fragment>
  );
};

export default CourseSave;
