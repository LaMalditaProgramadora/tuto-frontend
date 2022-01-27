import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav_brand}>
          <div className={styles.title}>
            <img
              className={`nes-avatar is-medium ${styles.pixelart}`}
              alt=""
              src="/assets/upc.png"
            ></img>
            <h1>Tuto</h1>
          </div>
          <div className={styles.options}>
            <NavLink to="course/list">
              <label className={styles.option}>Cursos</label>
            </NavLink>
            <NavLink to="teacher/list">
              <label className={styles.option}>Profesores</label>
            </NavLink>
            <NavLink to="section/list">
              <label className={styles.option}>Secciones</label>
            </NavLink>
            <NavLink to="tutor/list">
              <label className={styles.option}>Tutores</label>
            </NavLink>
            <NavLink to="student/list">
              <label className={styles.option}>Estudiantes</label>
            </NavLink>
            <NavLink to="topic/list">
              <label className={styles.option}>Temas</label>
            </NavLink>
            <NavLink to="tutorship/list">
              <label className={styles.option}>Tutorías</label>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
