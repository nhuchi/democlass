import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Class, Student, UpdateClass } from './schools';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  classUrl = 'http://azicloud.somee.com/api/class';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  // lay tat ca class
  getAllClass(): Observable<Class[]>{
    return this.http.get<Class[]>(this.classUrl).pipe();
  }
  // lay class
  getClass(id: number): Observable<any>{
    return this.http.get(`${this.classUrl}/${id}`);
  }
  // lay  tat ca student
  getAllStudent(id: number): Observable<Class>{
    return this.http.get<Class>(`${this.classUrl}/${id}`)
  }
  //lay mot hoc sinh
  getStudent(id: number): Observable<any>{
    return this.http.get(`${this.classUrl}/${id}`)
  }
  //them mot class moi
  addClass(classs: Class): Observable<Class> {
    return this.http.post<Class>(this.classUrl, classs);
  }
  // xoa mot class
  deleteClass(id: number): Observable<Class>{
    return  this.http.delete<Class>(`${this.classUrl}/${id}`);
  }
  // update mot class
  updateClass(updateClass: UpdateClass): Observable<UpdateClass>{
    return this.http.put<UpdateClass>(`${this.classUrl}`, updateClass);
  }
  // them mot hoc sinh
  addStudent(student: Student): Observable<Class> {
    return this.http.post<Class>(`${this.classUrl}`, student);
  }

  // xoa mot hoc sinh
  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.classUrl}/${id}`)
  }

}
