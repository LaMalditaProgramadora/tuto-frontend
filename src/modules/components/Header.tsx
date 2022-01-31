import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import Hamburger from './Hamburger';

import logo from '../../assets/upc.png';

function Header(): React.ReactElement {
  const [menu, setMenu] = useState(false);

  const toggle: (state: boolean) => void = (state: boolean) => setMenu(state);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav_brand}>
          <div className={styles.title}>
            <div className={styles.title_button}>
              <Hamburger toggleCallback={toggle} />
            </div>

            <div className={styles.title_brand}>
              <img className={styles.pixelart} alt="" src={logo} />
              <h1 className={styles.title_text}>Tuto</h1>
            </div>
          </div>
          <div className={classNames(styles.options, menu && styles.active)}>
            <NavLink to="course" className={({ isActive }) => styles.option}>
              Cursos
            </NavLink>
            <NavLink to="teacher" className={({ isActive }) => styles.option}>
              Profesores
            </NavLink>
            <NavLink to="section" className={({ isActive }) => styles.option}>
              Secciones
            </NavLink>
            <NavLink to="tutor" className={({ isActive }) => styles.option}>
              Tutores
            </NavLink>
            <NavLink to="student" className={({ isActive }) => styles.option}>
              Estudiantes
            </NavLink>
            <NavLink to="topic" className={({ isActive }) => styles.option}>
              Temas
            </NavLink>
            <NavLink to="tutorship" className={({ isActive }) => styles.option}>
              Tutorías
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
