import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../_assets/upc.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <div className="title">
            <img
              className="nes-avatar is-medium pixelart"
              alt=""
              src={logo}
            ></img>
            <h1>Tuto</h1>
          </div>
          <div className="options">
            <a href="/course/list">
              {" "}
              <label className="option">Cursos</label>
            </a>
            <a href="/teacher/list">
              {" "}
              <label className="option">Profesores</label>
            </a>{" "}
            <a href="/section/list">
              {" "}
              <label className="option">Secciones</label>
            </a>{" "}
            <a href="/tutor/list">
              {" "}
              <label className="option">Tutores</label>
            </a>{" "}
            <a href="/student/list">
              {" "}
              <label className="option">Estudiantes</label>
            </a>{" "}
            <a href="/topic/list">
              {" "}
              <label className="option">Temas</label>
            </a>{" "}
            <a href="/tutorship/list">
              {" "}
              <label className="option">Tutorías</label>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
