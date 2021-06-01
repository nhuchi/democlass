export interface Schools {
}
export interface Class {
  students: Student[];
  id: number;
  name: string;
  student: Array<Student>;
}
export interface Student{
  id: number;
  name: string;
  class_id: number;
}
export interface UpdateClass {
  id: number,
  name: string,
  students: Array<AddNew>,
  DeletedStudents: Array<DeleteStd>
}
interface AddNew {
  id: number,
  name: string,
  class_id: number
}
interface DeleteStd {
  id: number
}
