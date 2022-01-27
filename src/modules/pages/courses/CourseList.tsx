import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../../core/models/Course';
import { listCourses } from '../../../core/services/courseService';

function CourseList(): React.ReactElement {
  const [courses, setCourses] = useState<Course[]>([]);

  // const deleteById = () => {
  //   courseService.deleteById().then((results) => {
  //     setCourses(results.data);
  //   });
  // };

  useEffect(() => {
    listCourses().then((results) => {
      setCourses(results);
    });
  }, []);

  return (
    <>
      <div className="page-title">
        <h2>Cursos</h2>
        <Link to="/course/save/0">
          <button type="button" className="nes-btn is-error red-button">
            + Agregar
          </button>
        </Link>
      </div>
      <div className="cards">
        {courses.map((course, indexRow) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="card" key={indexRow}>
            <div className="nes-container with-title is-rounded">
              <p className="title">{course.code}</p>
              <ul className="nes-list is-disc card-list">
                <li>
                  <p className="li-left-padding">{course.name}</p>
                </li>
              </ul>
              <div className="little-right-buttons">
                <div className="row" />
                <div className="row">
                  <button
                    type="button"
                    className="little-right-button nes-btn is-error red-button"
                  >
                    M
                  </button>
                  <button
                    type="button"
                    className="little-right-button nes-btn is-error red-button"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CourseList;
