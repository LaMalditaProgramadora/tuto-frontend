import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { Course } from '../../../core/models/Course';
import {
  listCourseById,
  saveCourse,
} from '../../../core/services/courseService';

function CourseSave(): React.ReactElement {
  const courseInit: Course = {
    idCourse: 0,
    name: '',
    code: '',
    sections: [],
  };

  const { idCourse } = useParams();
  const [course, setCourse] = useState(courseInit);
  const [hiddenModal, setHiddenModal] = useState(true);

  const save: () => void = () => {
    setHiddenModal(false);
    saveCourse(course).then((result) => {
      setHiddenModal(true);
      console.log(result);
    });
  };

  const listById: () => void = () => {
    if (idCourse && idCourse !== '0') {
      listCourseById(Number.parseInt(idCourse, 10)).then((result) => {
        setCourse(result);
      });
    }
  };

  const handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target) {
      const courseAux = { ...course, [event.target.name]: event.target.value };
      setCourse(courseAux);
    }
  };

  useEffect(() => {
    listById();
  });

  return (
    <>
      <Loading hidden={hiddenModal} />
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
          <label htmlFor="code_field">
            Código
            <input
              name="code"
              value={course.code}
              onChange={handleInputChange}
              type="text"
              id="code_field"
              className="nes-input is-rounded nes-container"
              placeholder="Escriba el código del curso"
            />
          </label>
        </div>
        <div className="nes-field field">
          <label htmlFor="name_field">
            Nombre
            <input
              id="name_field"
              name="name"
              value={course.name}
              onChange={handleInputChange}
              type="text"
              className="nes-input is-rounded nes-container"
              placeholder="Escriba el nombre del curso"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default CourseSave;
