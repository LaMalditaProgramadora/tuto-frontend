import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav_brand}>
          <div className={styles.title}>
            <img
              className={`nes-avatar is-medium ${styles.pixelart}`}
              alt=""
              src="/assets/upc.png"
            />
            <h1>Tuto</h1>
          </div>
          <div className={styles.options}>
            <NavLink to="course/list">
              <span className={styles.option}>Cursos</span>
            </NavLink>
            <NavLink to="teacher/list">
              <span className={styles.option}>Profesores</span>
            </NavLink>
            <NavLink to="section/list">
              <span className={styles.option}>Secciones</span>
            </NavLink>
            <NavLink to="tutor/list">
              <span className={styles.option}>Tutores</span>
            </NavLink>
            <NavLink to="student/list">
              <span className={styles.option}>Estudiantes</span>
            </NavLink>
            <NavLink to="topic/list">
              <span className={styles.option}>Temas</span>
            </NavLink>
            <NavLink to="tutorship/list">
              <span className={styles.option}>Tutorías</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
