import { Course } from '../models/Course';
import httpClient from '../utils/httpClient';

export async function listCourses(): Promise<Course[]> {
  const data = await httpClient
    .get<Course[]>('/course/list')
    .then((v) => v.data);
  return data;
}

export async function listCourseById(courseId: number): Promise<Course> {
  const data = await httpClient
    .get<Course>(`/course/listById?idCourse=${courseId}`)
    .then((v) => v.data);
  return data;
}

export async function saveCourse(course: Course): Promise<void> {
  const data = await httpClient.post('/course/save', course);
  console.log(data);
}

export async function deleteCourse(courseId: number): Promise<void> {
  const data = await httpClient.delete(`/course/delete?idCourse=${courseId}`);
  console.log(data);
}
