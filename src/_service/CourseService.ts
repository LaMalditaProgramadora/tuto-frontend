import axios from "axios";
import { Course } from "../_model/Course";

class CourseService {
  API = process.env.REACT_APP_HEROKU_URL;

  constructor() {}

  list = async () => {
    return axios.get(`${this.API}/course/list`);
  };

  listById = async (idCourse: any) => {
    return axios.get(`${this.API}/course/listById?idCourse=${idCourse}`);
  };

  save = async (course: Course) => {
    return axios.post(`${this.API}/course/save`, course);
  };
}

export default CourseService;
