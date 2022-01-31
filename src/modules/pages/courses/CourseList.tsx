import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../../core/models/Course';
import { listCourses } from '../../../core/services/courseService';
import styles from '../../styles/Courses.module.css';

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
      <div className={styles.page_title}>
        <h2>Cursos</h2>
        <Link to="/course/save/0">
          <button
            type="button"
            className={classNames('nes-btn', 'is-error', styles.red_button)}
          >
            + Agregar
          </button>
        </Link>
      </div>
      <div className={styles.cards}>
        {courses.map((course, indexRow) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={styles.card} key={indexRow}>
            <div className="nes-container with-title is-rounded">
              <p className="title">{course.code}</p>
              <ul className="nes-list is-disc card-list">
                <li>
                  <p className={styles.li_left_padding}>{course.name}</p>
                </li>
              </ul>
              <div className={styles.little_right_buttons}>
                <div className="row" />
                <div className="row">
                  <button
                    type="button"
                    className={classNames(
                      styles.little_right_button,
                      'nes-btn',
                      'is-error',
                      styles.red_button
                    )}
                  >
                    M
                  </button>
                  <button
                    type="button"
                    className={classNames(
                      styles.litte_right_button,
                      'nes-btn',
                      'is-error',
                      styles.red_button
                    )}
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
